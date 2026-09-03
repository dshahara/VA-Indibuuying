// Fires automatically on every verified Netlify form submission.
// Posts a formatted message to Slack via an Incoming Webhook.
// Requires env var SLACK_WEBHOOK_URL (set in Netlify site settings).

const FIELD_LABELS = {
  name: "Name",
  email: "Work email",
  company: "Company",
  phone: "Phone / WhatsApp",
  workflow: "Workflow to test",
};

export const handler = async (event) => {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    console.error("SLACK_WEBHOOK_URL is not set");
    return { statusCode: 500, body: "missing webhook" };
  }

  let payload;
  try {
    ({ payload } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: "bad payload" };
  }

  const data = payload?.data ?? {};
  const formName = payload?.form_name || data["form-name"] || "form";

  const fields = [];
  for (const [key, label] of Object.entries(FIELD_LABELS)) {
    if (data[key]) fields.push({ type: "mrkdwn", text: `*${label}:*\n${String(data[key]).slice(0, 2000)}` });
  }
  for (const [key, value] of Object.entries(data)) {
    if (key in FIELD_LABELS || key === "form-name" || key === "bot-field" || !value) continue;
    fields.push({ type: "mrkdwn", text: `*${key}:*\n${String(value).slice(0, 2000)}` });
  }

  const adminUrl = payload?.site_url ? `${payload.site_url}/.netlify/forms` : null;

  const blocks = [
    { type: "header", text: { type: "plain_text", text: `New submission: ${formName}`, emoji: true } },
    { type: "section", fields: fields.slice(0, 10) },
  ];
  if (adminUrl) {
    blocks.push({
      type: "context",
      elements: [{ type: "mrkdwn", text: `<${adminUrl}|View in Netlify> · ${payload?.created_at ?? ""}` }],
    });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      text: `New submission: ${formName} — ${data.name || data.email || "no name"}`,
      blocks,
    }),
  });

  if (!res.ok) {
    console.error("Slack webhook failed", res.status, await res.text());
    return { statusCode: 502, body: "slack error" };
  }

  return { statusCode: 200, body: "ok" };
};
