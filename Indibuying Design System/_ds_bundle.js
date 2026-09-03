/* @ds-bundle: {"format":4,"namespace":"IndibuyingDesignSystem_92e6ff","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Field","sourcePath":"components/Field/Field.jsx"},{"name":"Stat","sourcePath":"components/Stat/Stat.jsx"},{"name":"Tag","sourcePath":"components/Tag/Tag.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"7a4582015226","components/Card/Card.jsx":"6c0a3dfb84cc","components/Field/Field.jsx":"5114e809ce2e","components/Stat/Stat.jsx":"ab1774699546","components/Tag/Tag.jsx":"0786f39479bb","ui_kits/website/Categories.jsx":"691cf1d93656","ui_kits/website/Footer.jsx":"cb2693ca38e9","ui_kits/website/Hero.jsx":"a63cfbfa3edb","ui_kits/website/HomePage.jsx":"80a5554fdf0e","ui_kits/website/HowItWorks.jsx":"a883b34e2816","ui_kits/website/Icons.jsx":"6545a0f46bfe","ui_kits/website/OperationsSupport.jsx":"105ac36a21bd","ui_kits/website/PageShared.jsx":"73d5b27400c8","ui_kits/website/PricingV2.jsx":"5f584331dbab","ui_kits/website/Proof.jsx":"2bbf686c7069","ui_kits/website/QuoteForm.jsx":"f2e5f4a1d258","ui_kits/website/ServicesPage.jsx":"d1600497efeb","ui_kits/website/TopNav.jsx":"cc3437abb339","ui_kits/website/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IndibuyingDesignSystem_92e6ff = window.IndibuyingDesignSystem_92e6ff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
const ibButtonSizes = {
  sm: {
    fontSize: 13,
    padding: "8px 16px",
    minHeight: 36
  },
  md: {
    fontSize: 14,
    padding: "12px 24px",
    minHeight: 44
  },
  lg: {
    fontSize: 16,
    padding: "15px 30px",
    minHeight: 52
  }
};
const ibButtonVariants = {
  primary: {
    rest: {
      background: "var(--action)",
      color: "var(--on-action)",
      borderColor: "transparent"
    },
    press: {
      background: "var(--action-pressed)"
    },
    ring: "var(--ring-action)"
  },
  green: {
    rest: {
      background: "var(--brand-green)",
      color: "var(--fg-onbrand)",
      borderColor: "transparent"
    },
    press: {
      background: "var(--brand-green-700)"
    },
    ring: "var(--ring-brand)"
  },
  secondary: {
    rest: {
      background: "transparent",
      color: "var(--fg-1)",
      borderColor: "var(--border-strong)"
    },
    press: {
      background: "var(--ink-50)"
    },
    ring: "var(--ring-action)"
  },
  onDark: {
    rest: {
      background: "var(--paper)",
      color: "var(--action)",
      borderColor: "transparent"
    },
    press: {
      background: "var(--ink-100)"
    },
    ring: "0 0 0 3px rgba(255,255,255,.35)"
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--fg-1)",
      borderColor: "transparent"
    },
    press: {
      background: "var(--ink-100)"
    },
    ring: "var(--ring-action)"
  },
  link: {
    rest: {
      background: "transparent",
      color: "var(--brand-green-700)",
      borderColor: "transparent",
      textDecoration: "underline",
      textUnderlineOffset: 4
    },
    press: {
      color: "var(--brand-green-700)"
    },
    ring: "var(--ring-brand)"
  }
};

/** Pill action. Ink is the default; green is reserved for the single highest-intent CTA on a page. */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  children,
  style
}) {
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const v = ibButtonVariants[variant] || ibButtonVariants.primary;
  const s = ibButtonSizes[size] || ibButtonSizes.md;
  const isFlat = variant === "ghost" || variant === "link";
  return React.createElement("button", {
    type,
    disabled,
    onClick,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    onFocus: e => {
      if (e.target.matches(":focus-visible")) setFocus(true);
    },
    onBlur: () => setFocus(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      lineHeight: 1.3,
      borderRadius: variant === "link" ? 0 : "var(--r-pill)",
      borderWidth: 1,
      borderStyle: "solid",
      whiteSpace: "nowrap",
      transition: "background var(--dur-med) var(--ease-out), color var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out)",
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: s.fontSize,
      padding: variant === "link" ? 0 : s.padding,
      minHeight: variant === "link" ? "auto" : s.minHeight,
      boxShadow: focus ? v.ring : "none",
      ...v.rest,
      ...(disabled ? {
        background: isFlat ? "transparent" : "var(--action-disabled)",
        color: "var(--fg-mute)",
        borderColor: "transparent"
      } : null),
      ...(!disabled && press ? v.press : null),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
const ibCardTints = {
  none: {
    background: "var(--surface)",
    color: "var(--fg-1)",
    border: "var(--hairline-soft)"
  },
  jewellery: {
    background: "var(--cat-jewellery)",
    color: "var(--cat-jewellery-ink)",
    border: "transparent"
  },
  handicrafts: {
    background: "var(--cat-handicrafts)",
    color: "var(--cat-handicrafts-ink)",
    border: "transparent"
  },
  furniture: {
    background: "var(--cat-furniture)",
    color: "var(--cat-furniture-ink)",
    border: "transparent"
  },
  furnishings: {
    background: "var(--cat-furnishings)",
    color: "var(--cat-furnishings-ink)",
    border: "transparent"
  },
  apparel: {
    background: "var(--cat-apparel)",
    color: "var(--cat-apparel-ink)",
    border: "transparent"
  },
  dark: {
    background: "var(--ink-900)",
    color: "var(--fg-ondark)",
    border: "transparent"
  }
};

/** Flat surface card. `standard` is a 16px white card; `feature` is the 28px pastel panel. */
function Card({
  title,
  tint = "none",
  shape = "standard",
  interactive = false,
  action,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const t = ibCardTints[tint] || ibCardTints.none;
  const feature = shape === "feature";
  const muted = tint === "dark" ? "var(--fg-ondark-mute)" : tint === "none" ? "var(--fg-2)" : "currentColor";
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: t.background,
      color: t.color,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: interactive && hover && tint === "none" ? "var(--border-strong)" : t.border,
      borderRadius: feature ? "var(--r-feature)" : "var(--r-card)",
      padding: feature ? 32 : 24,
      boxShadow: interactive && hover ? "var(--shadow-2)" : "none",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out)",
      ...style
    }
  }, title ? React.createElement("h3", {
    key: "title",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: feature ? 22 : 18,
      lineHeight: 1.3,
      letterSpacing: feature ? "-0.01em" : 0,
      color: "inherit",
      marginBottom: 8
    }
  }, title) : null, React.createElement("div", {
    key: "body",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.5,
      color: muted,
      opacity: tint === "none" || tint === "dark" ? 1 : .82
    }
  }, children), action ? React.createElement("div", {
    key: "action",
    style: {
      marginTop: 20
    }
  }, action) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Field/Field.jsx
try { (() => {
/** Labelled control at 44px. Focus is a 2px border, not a glow. */
function Field({
  label,
  help,
  error,
  as = "input",
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  options = [],
  rows = 3,
  name,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const active = error ? "var(--danger)" : focus ? "var(--action)" : "var(--border-strong)";
  const control = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 16,
    padding: as === "textarea" ? "12px 16px" : "0 16px",
    height: as === "textarea" ? "auto" : "var(--control-h)",
    minHeight: as === "textarea" ? 88 : "var(--control-h)",
    borderRadius: "var(--r-md)",
    borderWidth: focus || error ? 2 : 1,
    borderStyle: "solid",
    borderColor: active,
    background: "var(--paper)",
    color: "var(--fg-1)",
    width: "100%",
    outline: "none",
    opacity: disabled ? 0.45 : 1,
    transition: "border-color var(--dur-fast), border-width var(--dur-fast)"
  };
  const shared = {
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  };
  let field;
  if (as === "textarea") field = React.createElement("textarea", {
    ...shared,
    rows
  });else if (as === "select") field = React.createElement("select", shared, options.map(o => React.createElement("option", {
    key: o,
    value: o
  }, o)));else field = React.createElement("input", {
    ...shared,
    type
  });
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? React.createElement("label", {
    key: "l",
    htmlFor: name,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: 14,
      color: "var(--fg-1)"
    }
  }, label) : null, field, error || help ? React.createElement("span", {
    key: "h",
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 400,
      fontSize: 13,
      color: error ? "var(--danger)" : "var(--fg-3)"
    }
  }, error || help) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Field/Field.jsx", error: String((e && e.message) || e) }); }

// components/Stat/Stat.jsx
try { (() => {
/** Marketing stat callout. Italic display number over a quiet label. */
function Stat({
  value,
  label,
  align = "left",
  tone = "default",
  style
}) {
  const onDark = tone === "dark";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, React.createElement("span", {
    key: "v",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontStyle: "italic",
      fontSize: "clamp(2.5rem, 4vw + .5rem, 4rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: onDark ? "var(--fg-ondark)" : "var(--fg-1)"
    }
  }, value), React.createElement("span", {
    key: "l",
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4,
      color: onDark ? "var(--fg-ondark-mute)" : "var(--fg-3)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stat/Stat.jsx", error: String((e && e.message) || e) }); }

// components/Tag/Tag.jsx
try { (() => {
const ibTagTones = {
  green: {
    background: "var(--brand-green-100)",
    color: "var(--brand-green-700)"
  },
  success: {
    background: "var(--brand-green)",
    color: "var(--fg-onbrand)"
  },
  ink: {
    background: "var(--ink-900)",
    color: "var(--fg-ondark)"
  },
  neutral: {
    background: "var(--ink-100)",
    color: "var(--fg-2)"
  },
  warning: {
    background: "#FDF0D6",
    color: "#8A6410"
  },
  danger: {
    background: "#FBE4E2",
    color: "#9C2C25"
  },
  jewellery: {
    background: "var(--cat-jewellery)",
    color: "var(--cat-jewellery-ink)"
  },
  handicrafts: {
    background: "var(--cat-handicrafts)",
    color: "var(--cat-handicrafts-ink)"
  },
  furniture: {
    background: "var(--cat-furniture)",
    color: "var(--cat-furniture-ink)"
  },
  furnishings: {
    background: "var(--cat-furnishings)",
    color: "var(--cat-furnishings-ink)"
  },
  apparel: {
    background: "var(--cat-apparel)",
    color: "var(--cat-apparel-ink)"
  }
};

/** Pill badge for status and category labels. Always `r-pill`, always 13/600. */
function Tag({
  tone = "green",
  dot = false,
  children,
  style
}) {
  const t = ibTagTones[tone] || ibTagTones.green;
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, dot ? React.createElement("span", {
    key: "dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Categories.jsx
try { (() => {
function Categories() {
  const cats = [{
    name: 'Apparel & textiles',
    factories: '180+ factories · Tiruppur, Ludhiana',
    I: Icon.shirt,
    c: 'var(--brand-green-100)'
  }, {
    name: 'Home & kitchen',
    factories: '120+ factories · Moradabad, Jaipur',
    I: Icon.home,
    c: '#FDE5C2'
  }, {
    name: 'Beauty & wellness',
    factories: '60+ factories · Mumbai, Delhi NCR',
    I: Icon.spark,
    c: '#F3DCD0'
  }, {
    name: 'Organic & ayurveda',
    factories: '45+ farms & co-ops',
    I: Icon.leaf,
    c: '#DCEAD0'
  }, {
    name: 'Hardware & tools',
    factories: '70+ factories · Rajkot, Pune',
    I: Icon.tools,
    c: '#D9E2EC'
  }, {
    name: 'Tea & coffee',
    factories: '30+ estates · Assam, Coorg',
    I: Icon.cup,
    c: '#F0D6BB'
  }, {
    name: 'Stationery & gifts',
    factories: '50+ factories · Sivakasi, Delhi',
    I: Icon.spark,
    c: '#FBE0DD'
  }, {
    name: 'Toys & juvenile',
    factories: '25+ factories · Channapatna',
    I: Icon.toy,
    c: '#E8D7F0'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section alt",
    id: "categories"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Categories"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 700
    }
  }, "Twelve categories. A factory network we've actually walked.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn ghost"
  }, "View all 12 \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "cats"
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    className: "cat",
    key: c.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "swatch-cat",
    style: {
      background: c.c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--brand-green-700)'
    }
  }, /*#__PURE__*/React.createElement(c.I, null)), /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "factories"
  }, c.factories))))));
}
window.Categories = Categories;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Categories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "lockup"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Indibuying")), /*#__PURE__*/React.createElement("p", {
    className: "blurb"
  }, "Operations services for global buyers sourcing from India. One team, every order, from spec to port.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Factory sourcing"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Sampling"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Quality inspection"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Freight & clearance")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Case studies"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Careers"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contact")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@indibuying.com"
  }, "hello@indibuying.com"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "WhatsApp +91 22 \u2026"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Mumbai \xB7 Tiruppur \xB7 Moradabad"))), /*#__PURE__*/React.createElement("div", {
    className: "container legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Indibuying Operations Pvt Ltd. All rights reserved."), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline',
      marginRight: 16
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline'
    }
  }, "Terms"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tint"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Currently shipping for 40+ global buyers"), /*#__PURE__*/React.createElement("h1", null, "Source from India,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "without sourcing in India.")), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "We find the right factory, sample your product, run pre-shipment QC, and ship. One operations team, one point of contact, no surprises."), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn lg",
    onClick: onQuote
  }, "Get a sourcing quote ", /*#__PURE__*/React.createElement(Icon.arrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "btn ghost"
  }, "See how it works \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-stack"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pop tl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Pre-shipment photos sent \xB7 2 hrs ago"), /*#__PURE__*/React.createElement("div", {
    className: "pop br"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "3 factories shortlisted \xB7 Tiruppur"))));
}
function Metrics() {
  const data = [['600+', 'Verified factories'], ['12', 'Product categories'], ['40+', 'Active global buyers'], ['24 hrs', 'Avg. first reply']];
  return /*#__PURE__*/React.createElement("div", {
    className: "metrics"
  }, data.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    className: "metric",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, l))));
}
window.Hero = Hero;
window.Metrics = Metrics;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// /home — Homepage

const BENEFITS = [{
  h: 'Vetted workshops',
  p: "Physically visited, capability-audited — not pulled off IndiaMART."
}, {
  h: 'First sample in 2-3 weeks',
  p: "Not 2–3 months of cold outreach to factories you can't verify."
}, {
  h: 'Pre-shipment inspection',
  p: "Quality checked before goods leave India. Bad batches don't ship."
}, {
  h: 'One direct contact',
  p: "No WhatsApp groups, no missing updates, no 2 AM follow-ups."
}];
const CATEGORIES = [{
  name: 'Jewellery',
  tag: 'Our deepest network',
  desc: 'Silver (925, oxidized, antique-finish), brass (raw, antiqued, plated), gold-plated work (1–3 micron), and stone-set pieces with semi-precious and basic precious stones.',
  not: "We don't do certified loose diamond procurement or fine jewellery where the stone is the primary value.",
  bg: 'linear-gradient(160deg, #C9A77A, #6B4421 70%, #3E2710)',
  photo: 'silver & brass workshop',
  span: 3
}, {
  name: 'Handicrafts & décor',
  desc: 'Hand-painted ceramics, marble inlay work, brass decoratives, wooden carving, blue pottery from Jaipur, metal art pieces.',
  bg: 'linear-gradient(155deg, #4A6A8A, #1F3A5F)',
  photo: 'blue pottery · Jaipur',
  span: 3
}, {
  name: 'Furniture',
  desc: 'Solid wood (sheesham, mango, acacia), upholstered, hand-carved traditional, contemporary mango-wood and metal. Network extends to Jodhpur — India\'s largest wooden furniture export cluster.',
  bg: 'linear-gradient(160deg, #B07747, #6B3F1F)',
  photo: 'Jodhpur joinery',
  span: 2
}, {
  name: 'Home furnishings',
  desc: 'Block-printed textiles (Sanganer, Bagru), bedding, cushion covers, table linen, rugs and dhurries, traditional Rajasthani textiles.',
  bg: 'linear-gradient(160deg, #C2596A, #6B1F2A)',
  photo: 'Sanganer block printing',
  span: 2
}, {
  name: 'Apparel',
  desc: 'Block-printed cotton, hand-embroidered pieces, traditional Rajasthani womenswear, kidswear, boho/contemporary styles.',
  not: 'Handcrafted only — not commodity garment production.',
  bg: 'linear-gradient(160deg, #6E8252, #2F4427)',
  photo: 'hand-embroidered apparel',
  span: 2
}];
const PROBLEMS = [{
  h: 'Timelines that slip without warning',
  desc: "'Two weeks' becomes four. Four becomes eight. Updates get vague, then sparse. Workshops juggle multiple orders — yours can quietly slide down the priority list when a bigger client walks in.",
  fix: 'Agreed timelines with weekly check-ins, and direct visibility into workshop workload before you commit.'
}, {
  h: 'Samples that drift from the reference',
  desc: "You send a moodboard, tech pack, exact specs. The sample comes back close — but not quite. The cause is usually translation, not deception: tech packs read differently to a karigar than to you.",
  fix: 'We walk through your references with the karigar in person before sampling starts, so what comes out is what you actually asked for.'
}, {
  h: 'Quality that varies between sample and bulk',
  desc: 'The sample looks great. The bulk run, made by different hands across multiple days, doesn\'t match it as tightly. Finish, dimension, color, material grade — they quietly drift.',
  fix: 'Pre-shipment inspection on every order — physical comparison against the approved sample, defect checks, and count verification before goods leave the workshop.'
}, {
  h: 'The first-time-buyer pricing gap',
  desc: "Workshops quote new buyers higher prices and firmer MOQs than they quote repeat customers. It's not malicious — it's how relationship-driven economies work. New buyers can pay 15–25% more.",
  fix: 'We negotiate as a portfolio buyer. Our clients get prices and MOQs that wouldn\'t be offered to a stranger walking in cold.'
}, {
  h: 'Telling a real workshop from a middleman',
  desc: "Many 'manufacturers' you find online are trading companies — they take your order and subcontract it to whichever workshop has capacity. You pay the middleman markup and have no control.",
  fix: 'Every workshop in our network has been physically visited. We\'ve seen the production floor, met the karigars, audited the capability. You work with the actual maker.'
}, {
  h: 'Communication that fragments across channels',
  desc: 'WhatsApp at 2 AM your time. A different person every week. Updates split across emails, voice notes, and three group chats. By month two you\'re spending more time chasing answers than running your brand.',
  fix: 'One direct contact, one channel, one source of truth. Weekly photo updates during active production, without you asking.'
}];
const OFFERS = [{
  tag: 'Start here',
  h: 'Vendor Sourcing + Sample Coordination',
  who: 'For brands placing their first order from Jaipur, or replacing a supplier that didn\'t work out.',
  desc: 'A two-to-three week engagement. We shortlist 2–3 vetted workshops matched to your category, design, and price point, coordinate sample requests, and deliver a capability + pricing report.',
  cta: 'Start vendor sourcing',
  href: 'services.html#vendor'
}, {
  tag: 'Most popular',
  h: 'Pre-Shipment QC',
  who: 'For brands placing production orders who want certainty before goods leave India.',
  desc: 'Our team visits the workshop before dispatch. Sample-vs-bulk comparison, defect check, count verification, finish review. Photo report within 24 hours and a go/no-go recommendation.',
  cta: 'Add QC to your next order',
  href: 'services.html#qc',
  popular: true
}, {
  tag: 'When you scale',
  h: 'India Operations Retainer',
  who: 'For brands running 2+ production cycles per quarter, scaling across multiple workshops.',
  desc: 'Your ongoing India team. Multi-workshop coordination, weekly QC visits, production calendar planning, real-time issue resolution. One point of contact for everything.',
  cta: 'Discuss a retainer',
  href: 'services.html#retainer'
}];
const STEPS = [{
  n: '01',
  h: 'Fit call (20 min, free)',
  p: "We understand your category, designs, target prices, volumes, and current pain. If we're not the right fit, we say so and point you elsewhere."
}, {
  n: '02',
  h: 'Workshop matching',
  p: 'We shortlist 2–3 workshops from our network. You get capability profiles, sample work, and our recommendation.'
}, {
  n: '03',
  h: 'Sample round',
  p: 'We coordinate sample production. Most designs hit spec in 1–2 iterations because we translate references in person, not over email.'
}, {
  n: '04',
  h: 'Production with optional QC',
  p: "You place the order. If you've added QC, we visit during production and inspect before dispatch."
}, {
  n: '05',
  h: 'Shipment and handover',
  p: 'The workshop ships directly to you. We coordinate documentation and tracking.'
}];
const FIT_YES = ["You're launching a brand and don't know where to start with Indian sourcing.", "You're already in production but your supplier is fragile or unreliable.", "You've been burned by a previous Indian or Alibaba supplier.", "You sell handcrafted or artisanal jewellery, home goods, furniture, textiles, or apparel.", "You value reliability over rock-bottom Alibaba pricing."];
const FIT_NO = ["You're price-shopping at the Alibaba floor — we cost more, and we earn it.", "You need volumes below standard workshop minimums (varies by category).", "You need certified loose diamonds, fine jewellery, or commodity garment production.", "You're a mature operator already managing India production self-sufficiently."];
const FAQ = [{
  q: 'What categories do you source?',
  a: 'Jewellery (silver, brass, gold-plated, stone-set), handicrafts and décor, furniture, home furnishings (block-print textiles, bedding, rugs), and handcrafted apparel. We focus on categories Jaipur and surrounding clusters are genuinely good at — handcrafted and artisanal work, not commodity production.'
}, {
  q: 'Where are your workshops?',
  a: 'Primarily Jaipur and the surrounding region — Sanganer (block printing), Bagru (natural-dye textiles), Jodhpur (wooden furniture), Sikar (handicrafts). For categories that aren\'t strong in Jaipur, we route to Mumbai, Delhi, or other clusters.'
}, {
  q: "What's the minimum order quantity?",
  a: 'Varies by category. Jewellery: 50–100 pieces per SKU. Textiles: typically 100–200 meters or 50–100 finished pieces per design. Furniture: 5–20 pieces per design depending on complexity. Apparel: 100–300 pieces per design. We confirm exact MOQs based on your spec.'
}, {
  q: 'Do you mark up workshop prices?',
  a: 'No. You pay the workshop directly at their quoted price. Our fees come from you only — transparent, no hidden margins.'
}, {
  q: 'How is this different from Alibaba?',
  a: 'Alibaba lists workshops. We\'ve physically visited ours, audited their capabilities, and removed workshops from our network for falling below our standards. You\'re paying for vetting and accountability, not search results.'
}, {
  q: "I'm just starting my brand and don't have orders yet. Can I work with you?",
  a: 'Yes. Many of our clients are early-stage or pre-revenue founders making their first production decisions. Our vendor sourcing engagement is built for exactly this.'
}, {
  q: 'What are your payment terms?',
  a: 'Transparent and structured. Our fees: typically a deposit on engagement start and balance on completion. Workshop production costs go directly from you to the workshop at quoted price.'
}, {
  q: 'How long until first delivery?',
  a: 'From engagement start to first sample: 2–3 weeks. From sample approval to bulk delivery: typically 4–8 weeks depending on category and volume. Total: roughly 6–11 weeks for a first order.'
}, {
  q: 'Do you take commissions from suppliers?',
  a: 'No. Our income is your fees only. Workshop quotes go to you at net price — we audit them but don\'t mark them up.'
}];
function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageNav, {
    active: "home"
  }), /*#__PURE__*/React.createElement("section", {
    className: "home-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tint"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Sourcing from Jaipur, India"), /*#__PURE__*/React.createElement("h1", null, "Source from Jaipur,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "the way it should be done.")), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "We find vetted Jaipur workshops, coordinate samples, and inspect every order before it ships. For brands sourcing jewellery, handicrafts, furniture, home furnishings, and apparel \u2014 whether you're placing your first order or your fiftieth."), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn lg"
  }, "Book a 20-minute fit call ", /*#__PURE__*/React.createElement(ArrowIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "btn ghost"
  }, "How we work \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-stack"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pop tl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Workshop visited \xB7 last Tuesday"), /*#__PURE__*/React.createElement("div", {
    className: "pop br"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Sample dispatched \xB7 Bagru")))), /*#__PURE__*/React.createElement("div", {
    className: "benefit-strip"
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement("div", {
    className: "benefit",
    key: b.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "check"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 14
  })), /*#__PURE__*/React.createElement("h4", null, b.h), /*#__PURE__*/React.createElement("p", null, b.p)))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    id: "categories"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Categories"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 780
    }
  }, "What we source from Jaipur and nearby clusters."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 14,
      maxWidth: 760
    }
  }, "Jaipur and the surrounding region (Sanganer, Bagru, Jodhpur, Sikar) is one of the most concentrated handcraft and small-manufacturing hubs in the world. We've spent years building workshop relationships across the categories that ship best to international buyers."), /*#__PURE__*/React.createElement("div", {
    className: "cats-grid"
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cat-card span-" + c.span,
    key: c.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      background: c.bg
    },
    "data-label": "[ photo · " + c.photo + " ]"
  }, c.tag && /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h3", null, c.name), /*#__PURE__*/React.createElement("p", null, c.desc), c.not && /*#__PURE__*/React.createElement("div", {
    className: "not"
  }, "\u2014 ", c.not))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The six things that go wrong"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 780
    }
  }, "Sourcing from India works \u2014 when you have the right partner."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 14,
      maxWidth: 820
    }
  }, "Jaipur and its surrounding clusters produce some of the world's best handcrafted goods \u2014 the karigar traditions in silver and stone-setting, the block-printing villages of Sanganer and Bagru, the wood-carving workshops of Jodhpur. The challenge isn't the region. It's that the supply ecosystem is large, fragmented, and built for buyers who already have relationships."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 10,
      maxWidth: 820
    }
  }, "If you don't have those relationships yet, six things tend to go wrong. Each is solvable \u2014 but only if you know what to look for."), /*#__PURE__*/React.createElement("div", {
    className: "problems-grid"
  }, PROBLEMS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "problem",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", null, p.h), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "fix"
  }, /*#__PURE__*/React.createElement("strong", null, "What we do"), p.fix)))), /*#__PURE__*/React.createElement("div", {
    className: "closing-frame"
  }, "None of this means India is a bad place to source from. The opposite \u2014 ", /*#__PURE__*/React.createElement("strong", null, "Jaipur and its surrounding clusters are where the craft is, where the price points work, and where the design vocabulary for handcrafted goods is deepest."), " But sourcing well from India is a skill, built through hundreds of orders and relationships. We've built that skill so you don't have to learn it the hard way."))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Three ways to work with us"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 760
    }
  }, "Start where you need help. Add the rest as you grow."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 14,
      maxWidth: 720
    }
  }, "Most clients start with vendor sourcing, add QC on their first production order, and move to a monthly retainer once they're running multiple cycles per quarter. You don't need to commit to all three on day one."), /*#__PURE__*/React.createElement("div", {
    className: "offer-grid"
  }, OFFERS.map(o => /*#__PURE__*/React.createElement("div", {
    className: "offer-card" + (o.popular ? ' popular' : ''),
    key: o.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "for"
  }, o.tag), /*#__PURE__*/React.createElement("h3", null, o.h), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, o.who), /*#__PURE__*/React.createElement("p", null, o.desc), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: o.href
  }, o.cta, " ", /*#__PURE__*/React.createElement(ArrowIcon, null)))))), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      marginTop: 22
    }
  }, "Pricing on all three is shared on a fit call once we understand your category, volume, and scope. See ", /*#__PURE__*/React.createElement("a", {
    href: "pricing-v2.html",
    style: {
      color: 'var(--brand-green-700)',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    }
  }, "pricing"), " for engagement bands."))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    id: "how",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "Five steps. The same rhythm every time."), /*#__PURE__*/React.createElement("div", {
    className: "steps-list"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step-row",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Case study"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 820
    }
  }, "Two years. $600K of orders. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "Zero supplier breakage.")), /*#__PURE__*/React.createElement("div", {
    className: "case-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Long-term client"), /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "$600,000", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "across 2 years.")), /*#__PURE__*/React.createElement("div", {
    className: "metrics"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Workshops vetted at the start")), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Sample rounds to first approval")), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "0"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Catastrophic failures since")))), /*#__PURE__*/React.createElement("div", {
    className: "case-text"
  }, /*#__PURE__*/React.createElement("p", null, "A brand owner approached us two years ago, frustrated after losing money on two failed orders from suppliers found on Alibaba. We started with vendor sourcing \u2014 three vetted workshops, two sample rounds, one selected partner."), /*#__PURE__*/React.createElement("p", null, "Since then, that client has placed weekly custom orders through the workshops we introduced \u2014 averaging ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "$300,000 annually"), " across two years. No catastrophic failures. No supplier ghosting. No 2 AM WhatsApp emergencies."), /*#__PURE__*/React.createElement("p", null, "The relationship is now mature \u2014 the client manages day-to-day production directly with the workshop, and engages us for periodic cost-reduction reviews. That's the path: enter on a scoped engagement, build trust over real orders, evolve the relationship as your needs change."), /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, "Client identity withheld at their request. Scoped reference calls available post fit call."))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Who this is for \xB7 who it isn't"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "We work best with brands that value reliability over rock-bottom pricing."), /*#__PURE__*/React.createElement("div", {
    className: "fit-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fit-col yes"
  }, /*#__PURE__*/React.createElement("h4", null, "This is for you if"), /*#__PURE__*/React.createElement("ul", null, FIT_YES.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 11
  })), x)))), /*#__PURE__*/React.createElement("div", {
    className: "fit-col no"
  }, /*#__PURE__*/React.createElement("h4", null, "This isn't a fit if"), /*#__PURE__*/React.createElement("ul", null, FIT_NO.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    size: 11
  })), x))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12
    }
  }, "Before you book a call."), /*#__PURE__*/React.createElement(Faq, {
    items: FAQ
  }))), /*#__PURE__*/React.createElement(ClosingCTA, {
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Let's ", /*#__PURE__*/React.createElement("em", null, "talk.")),
    sub: "A 20-minute call to understand your situation. We'll ask about your category, designs, supplier history, and what's blocking you right now. If we can help, we'll tell you how. If we can't, we'll point you somewhere that can."
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
function HowItWorks() {
  const steps = [{
    n: '01',
    t: 'Source',
    d: 'Tell us the spec. We shortlist five verified factories within three working days.',
    I: Icon.search
  }, {
    n: '02',
    t: 'Sample',
    d: 'We negotiate, place sample orders, and courier the samples to your door.',
    I: Icon.beaker
  }, {
    n: '03',
    t: 'Inspect',
    d: '100% pre-shipment inspection on every order. Photos before anything leaves the floor.',
    I: Icon.eye
  }, {
    n: '04',
    t: 'Ship',
    d: 'We handle export docs, freight forwarding, and clearance. You receive at port.',
    I: Icon.ship
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "Four steps. One team. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "Every order.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Step ", s.n), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      bottom: 18,
      color: 'var(--brand-green)',
      opacity: .25
    }
  }, /*#__PURE__*/React.createElement(s.I, null)))))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// Lucide-style inline icons. 1.75px stroke, rounded, currentColor.
const Icon = {
  arrow: () => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })),
  check: (size = 24) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })),
  search: () => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  beaker: () => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 3h15M6 3v7L4 21h16L18 10V3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 14h8"
  })),
  eye: () => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  ship: () => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 17 6 9h12l3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 6h6"
  })),
  shirt: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 4 12 8 8 4 3 6l3 5v9h12v-9l3-5z"
  })),
  home: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m3 11 9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"
  })),
  spark: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
  })),
  leaf: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13c0-6 8-9 17-9 0 9-3 17-9 17a7 7 0 0 1-1-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13c.3-2 2-5 8-7"
  })),
  tools: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.7 6.3a4 4 0 1 0-5.4 5.4l-6.2 6.2 2 2 6.2-6.2a4 4 0 0 0 5.4-5.4z"
  })),
  cup: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"
  })),
  toy: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "10",
    r: "1.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15c1 1 4.5 1 6 0"
  }))
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OperationsSupport.jsx
try { (() => {
// /operations-support — Hourly India ops support

const WHO_FOR = ["Brands already sourcing from India who need overflow operational capacity.", "Founders who don't want to hire a full-time India ops person yet.", "Teams handling a specific one-off — vendor verification, factory visit, supplier audit.", "US / EU companies needing a trusted person to walk into a factory and report back honestly.", "Buyers who tried hiring a VA and realised they need someone who actually knows Indian manufacturing.", "Buyers flying into India for factory visits who want someone on the ground to make the trip count."];
const HANDLE = [{
  h: "Supplier research & verification",
  s: "Find and vet manufacturers, not traders with a website.",
  items: ["Find and shortlist manufacturers in a specific Indian cluster (Jaipur, Jodhpur, Delhi-NCR, Mumbai-Pune, Kerala/Karnataka)", "Verify legitimacy — physical address, GST, IEC, capability claims", "Distinguish real manufacturers from middlemen with a website", "Collect quotes, MOQs, and lead times across multiple suppliers", "Build comparison spreadsheets for your sourcing decisions"]
}, {
  h: "Factory & workshop visits",
  s: "Physical visits with photos, video, and an honest read.",
  items: ["On-site visits in Jaipur and nearby clusters (Sanganer, Bagru, Jodhpur, Sikar)", "Photos and short videos of production floor, machinery, sample work", "Informal capability audits — capacity, quality standards, ethical practices", "Travel possible to Delhi-NCR, Mumbai, Jodhpur, Kerala coffee belt (actuals extra)"]
}, {
  h: "Quality & inspection coordination",
  s: "Hands-on pre-shipment work — not paper certifications.",
  items: ["Pre-shipment inspections (AQL-based or buyer-specified)", "Sample-vs-bulk comparisons against your approved sample", "Defect documentation with photo evidence", "Coordinate rework with the workshop before dispatch"]
}, {
  h: "Documentation & compliance",
  s: "Export paperwork that actually clears customs.",
  items: ["Commercial invoice, packing list, certificate of origin, BIS hallmarking docs", "HS code guidance for your destination country", "Indian export compliance — FEMA, GST LUT, IEC, payment routing", "Coordination with freight forwarders, couriers, and customs brokers", "Category-specific (phytosanitary for coffee, Coffee Board permits, BIS for silver)"]
}, {
  h: "Vendor management & follow-up",
  s: "Chase outcomes, not emails.",
  items: ["Chase pending samples, quotes, or production updates a supplier has gone quiet on", "Negotiate pricing, MOQs, or payment terms in Hindi or regional languages", "Translate tech packs or specs for karigars who don't read English", "Mediate disputes between you and your Indian supplier"]
}, {
  h: "Category-specific ops work",
  s: "Where deep India knowledge actually matters.",
  items: ["Jewellery (Jaipur): silver verification, plating micron testing, stone authenticity, hallmarking", "Furniture (Jodhpur/Jaipur): joinery, wood seasoning verification, export packaging", "Textiles (Sanganer/Bagru): block-print quality, color-fastness, fabric grade", "Apparel: stitch density, seam strength, sizing consistency", "Coffee (Kerala/Karnataka): cupping, traceability, export permit coordination"],
  dark: true
}];
const VA_LIST = ["Email coordination and inbox triage", "Calendar and scheduling support", "Light research over Google + LinkedIn", "Can't physically visit anything", "No Indian manufacturing context", "Doesn't know what a fair Jaipur quote looks like"];
const US_LIST = ["Walks into a factory and looks at production", "Speaks Hindi, Marwari, Kannada with karigars", "Knows when a quote is fair vs new-buyer premium", "Spots the difference between real 925 silver and 800-grade with a fake stamp", "Navigates FEMA, GST LUT, IEC, BIS, export compliance", "Can chase outcomes — not just chase emails"];
const ENGAGE_OPTIONS = [{
  h: 'Project-based',
  d: 'One-off work — a single factory visit, supplier audit, or quote-collection project. We scope hours upfront, agree on deliverables, bill at the end.',
  tag: 'Best for ad-hoc'
}, {
  h: 'Hourly bank',
  d: 'Pre-purchase a block of hours (10 / 25 / 50) at a slightly reduced rate. Use across multiple small tasks over 3–6 months.',
  tag: 'Most flexible',
  popular: true
}, {
  h: 'Embedded retainer',
  d: 'Reserve a fixed number of hours per week (typically 10–20). Best when you need consistent India ops support without hiring full-time.',
  tag: 'Best for ongoing'
}];
const FAQ = [{
  q: "What's the minimum engagement?",
  a: "No formal minimum. Single-task engagements as small as 2–3 hours are fine. Most projects fall in the 5–20 hour range."
}, {
  q: "Are travel costs included?",
  a: "Local travel within Jaipur city is included in the hourly rate. Outside-city travel (Jodhpur, Delhi, Mumbai, Kerala, etc.) is billed at actuals — train/flight + accommodation + ground transport. We share an estimate before any outside-city engagement."
}, {
  q: "How do you bill time?",
  a: "Tracked in 15-minute increments with a brief work log per session. Shared with you weekly or at project completion. No padding, no minimum block billing."
}, {
  q: "Can you sign an NDA?",
  a: "Yes — standard for buyer engagements. We sign before any work begins. Specific vendor names, designs, or sourcing strategies stay confidential."
}, {
  q: "Do you offer this for non-sourcing operations work?",
  a: "If it's India ops work that benefits from a person on the ground — yes, in many cases. Examples: market research visits, partner due diligence, exhibition coverage, vendor onboarding for non-manufacturing services. Ask on the fit call."
}, {
  q: "How much notice for an India tour visit?",
  a: "Ideally 3–4 weeks. That gives us time to shortlist factories, confirm meetings, and plan logistics properly. We've handled trips at 7–10 days' notice when needed, but the factory line-up is tighter and some preferred suppliers may not have availability that quickly."
}, {
  q: "How is this different from your sourcing services?",
  a: "Sourcing services are packaged engagements with fixed deliverables (vendor search, QC, retainer). Operations support is hourly, flexible, and unbundled — you direct the work as needed. Many buyers use both, depending on the situation."
}];
function OpsSupportPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageNav, {
    active: "ops"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Indibuying"), " \xA0/\xA0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Operations support")), /*#__PURE__*/React.createElement("h1", null, "Hourly India ops support,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "when you need a hand on the ground.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Sometimes you don't need a full sourcing engagement. You need someone in India who can pick up the phone, visit a workshop, chase a quote, verify a vendor, or handle the operational tasks that keep getting pushed to the bottom of your list."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 12,
      color: 'var(--fg-1)',
      fontWeight: 600
    }
  }, "That's what this service is for. Hourly, flexible, no minimum commitment."), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn lg"
  }, "Book a fit call ", /*#__PURE__*/React.createElement(ArrowIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#handle",
    className: "btn ghost"
  }, "See what we handle \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Who this is for"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 600
    }
  }, "A trusted person in India, on demand."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 14,
      maxWidth: 540
    }
  }, "Most buyers find us when a VA isn't enough but a full hire is too much. Hourly ops support fits the gap.")), /*#__PURE__*/React.createElement("div", {
    className: "side-note"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Anchored by Shibu"), "Co-founder Shibu Gupta runs this service personally for engagements anchored in Jaipur or nearby clusters. For trips further afield, Shibu either travels with you or coordinates with verified local partners on the ground.")), /*#__PURE__*/React.createElement("div", {
    className: "who-grid"
  }, WHO_FOR.map((w, i) => /*#__PURE__*/React.createElement("div", {
    className: "who-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, w)))), /*#__PURE__*/React.createElement("div", {
    className: "rate-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "$15 \u2013 25"), /*#__PURE__*/React.createElement("div", {
    className: "unit"
  }, "/ hour"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Exact rate within this band depends on the type of work and project scope. Quoted before each engagement.")), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 11
  })), "Time tracked transparently in 15-min increments"), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 11
  })), "Billed weekly or per project, depending on size"), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 11
  })), "No retainer required. No minimum commitment."), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 11
  })), "NDA signed before any work begins"))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    id: "handle",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we handle"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 760
    }
  }, "Anything that benefits from someone in India with manufacturing knowledge and on-ground access."), /*#__PURE__*/React.createElement("div", {
    className: "handle-grid"
  }, HANDLE.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "handle-card" + (c.dark ? ' dark' : ''),
    key: i
  }, /*#__PURE__*/React.createElement("h4", null, c.h), /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, c.s), /*#__PURE__*/React.createElement("ul", null, c.items.map((x, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, x)))))), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      marginTop: 18
    }
  }, "Note \xB7 we coordinate inspections, but don't hold formal third-party certifications (SGS, Bureau Veritas). For those, we can recommend partners."))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    id: "tour"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tour-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Buyer India tour support")), /*#__PURE__*/React.createElement("h2", null, "You land, ", /*#__PURE__*/React.createElement("em", null, "we drive,"), " you go home with decisions made."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Flying in to meet factories and see production first-hand? Most buyers come for 3\u20134 days and want to visit as many vetted suppliers as possible without wasting time on logistics, navigation, or factories that turn out not to fit. That's the whole job."), /*#__PURE__*/React.createElement("div", {
    className: "tour-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h4", null, "What's included"), /*#__PURE__*/React.createElement("ul", null, ["Pre-trip factory shortlisting based on your sourcing brief", "Meeting scheduling — confirming availability, briefing factories, sample sets ready", "Daily itinerary — 3–5 visits per day in dense clusters, 2–3 with travel time", "Personal accompaniment through every meeting (Shibu, or verified local partner)", "Translation at factory visits — Hindi, Marwari, regional languages", "Real-time negotiation support — pricing, MOQs, payment terms in the room", "Post-meeting debrief notes — capability fit, red flags, our honest read", "End-of-trip summary with shortlist and recommended next steps"].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })), x)))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h4", null, "Logistics handled \u2014 billed at cost"), /*#__PURE__*/React.createElement("ul", null, ["Private car and driver for the duration", "Hotel bookings at properties that work for business travellers", "Inter-city travel — flights or trains between clusters", "Restaurant recommendations and reservations where useful", "SIM card, local payments, currency exchange guidance on arrival"].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  })), x))), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      marginTop: 16
    }
  }, "No markup on logistics. We share an estimate upfront based on your itinerary."))), /*#__PURE__*/React.createElement("div", {
    className: "tour-trip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Typical 3-day trip"), /*#__PURE__*/React.createElement("div", {
    className: "headline"
  }, "$500 \u2013 $800 for our hours, plus actuals on logistics."), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      color: 'rgba(255,255,255,.6)',
      marginTop: 14
    }
  }, "Tour days run 8\u201310 active hours. A 3-day trip is usually 24\u201330 billable hours. Inter-city travel time on the trip is billed hourly; personal travel before/after is not.")), /*#__PURE__*/React.createElement("div", {
    className: "breakdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Pre-trip planning call"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "1\u20132 hrs")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Factory shortlisting & outreach"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "3\u20135 hrs")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "On-the-ground days \xB7 3 days"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "24\u201330 hrs")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Post-trip summary"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "1\u20132 hrs")), /*#__PURE__*/React.createElement("div", {
    className: "row total"
  }, /*#__PURE__*/React.createElement("span", null, "Our hours"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "$500 \u2013 $800")), /*#__PURE__*/React.createElement("div", {
    className: "row total"
  }, /*#__PURE__*/React.createElement("span", null, "+ logistics at actuals"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "$300 \u2013 $600"))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How this differs from a VA"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "A VA can chase emails. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "We can chase outcomes.")), /*#__PURE__*/React.createElement("div", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col va"
  }, /*#__PURE__*/React.createElement("h4", null, "$10 / hour VA"), /*#__PURE__*/React.createElement("div", {
    className: "price-row"
  }, "Email coordination"), /*#__PURE__*/React.createElement("ul", null, VA_LIST.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    size: 11
  })), x)))), /*#__PURE__*/React.createElement("div", {
    className: "col us"
  }, /*#__PURE__*/React.createElement("h4", null, "Indibuying ops support"), /*#__PURE__*/React.createElement("div", {
    className: "price-row"
  }, "On-ground operations"), /*#__PURE__*/React.createElement("ul", null, US_LIST.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 11
  })), x))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Engagement options"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12
    }
  }, "Three ways to engage."), /*#__PURE__*/React.createElement("div", {
    className: "engage-grid"
  }, ENGAGE_OPTIONS.map((o, i) => /*#__PURE__*/React.createElement("div", {
    className: "engage-card" + (o.popular ? ' popular' : ''),
    key: i
  }, o.popular && /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Most flexible"), /*#__PURE__*/React.createElement("h4", null, o.h), /*#__PURE__*/React.createElement("p", null, o.d), /*#__PURE__*/React.createElement("div", {
    className: "meta",
    style: {
      marginTop: 'auto',
      paddingTop: 14,
      color: 'var(--brand-green-700)',
      fontWeight: 600
    }
  }, o.tag)))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Who you'll work with"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      marginBottom: 28,
      maxWidth: 720
    }
  }, "Anchored by a co-founder, not a faceless ops desk."), /*#__PURE__*/React.createElement("div", {
    className: "shibu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Shibu Gupta"), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, "Co-founder \xB7 Jaipur operations lead"), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, "Shibu runs Indibuying's on-ground operations across India's main manufacturing clusters \u2014 Jaipur, Jodhpur, Delhi-NCR, Mumbai-Pune, and the Kerala/Karnataka coffee belt \u2014 with direct karigar and factory access in each."), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 8
    }
  }, "For categories or geographies that need specialist knowledge (e.g. Kerala coffee, Jodhpur furniture), Shibu coordinates with verified partners on the ground who report into the same engagement \u2014 never a third party you have to manage."))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Common questions"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12
    }
  }, "Before you book a call."), /*#__PURE__*/React.createElement(Faq, {
    items: FAQ
  }))), /*#__PURE__*/React.createElement(ClosingCTA, {
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Tell us what you need help with."),
    sub: "A 20-minute call to scope the work, agree on hours, and start. NDA signed before any work begins."
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.OpsSupportPage = OpsSupportPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OperationsSupport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PageShared.jsx
try { (() => {
// Shared bits used across pricing + ops-support pages.

function CheckIcon({
  size = 12
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
}
function MinusIcon({
  size = 12
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
}
function ArrowIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  }));
}
function PageNav({
  active
}) {
  const items = [{
    id: 'home',
    href: 'home.html',
    label: 'Home'
  }, {
    id: 'services',
    href: 'services.html',
    label: 'Services'
  }, {
    id: 'pricing',
    href: 'pricing-v2.html',
    label: 'Pricing'
  }, {
    id: 'ops',
    href: 'operations-support.html',
    label: 'Operations support'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "lockup"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Indibuying")), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.id,
    href: i.href,
    className: "item" + (i.id === active ? ' active' : '')
  }, i.label)), /*#__PURE__*/React.createElement("div", {
    className: "nav-spacer"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "item"
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn sm"
  }, "Book a fit call"));
}
function ClosingCTA({
  headline,
  sub,
  primary = 'Book a fit call',
  secondary = 'Email us'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, headline), /*#__PURE__*/React.createElement("p", null, sub)), /*#__PURE__*/React.createElement("div", {
    className: "col-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn lg"
  }, primary, " ", /*#__PURE__*/React.createElement(ArrowIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@indibuying.com",
    className: "btn secondary"
  }, secondary), /*#__PURE__*/React.createElement("div", {
    className: "micro"
  }, "20-minute call \xB7 no obligation")))));
}
function Faq({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    className: "faq",
    key: i
  }, /*#__PURE__*/React.createElement("summary", null, it.q), /*#__PURE__*/React.createElement("div", {
    className: "a"
  }, it.a))));
}
window.CheckIcon = CheckIcon;
window.MinusIcon = MinusIcon;
window.ArrowIcon = ArrowIcon;
window.PageNav = PageNav;
window.ClosingCTA = ClosingCTA;
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PageShared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingV2.jsx
try { (() => {
// /pricing-v2 — Work-unit pricing

const UNITS = [{
  n: '01',
  name: 'Vendor Search + Sampling Coordination',
  price: '$250',
  engagement: '4-week engagement',
  summary: "We identify and vet 2–3 Jaipur workshops matched to your design, category, and price point. Coordinate sample requests, translate your references in person with the karigar, and deliver a comparison report with pricing, MOQs, and lead times.",
  included: ["Shortlist of 2–3 vetted workshops", "Direct karigar-level conversation on your references", "Sample request coordination (sample fees paid by you to workshop)", "Capability + pricing report on each workshop", "Workshop introduction on approval"],
  excluded: ["Sample production cost (paid directly to workshop)", "International courier of physical samples (billed at cost)", "Production order management (covered under Unit 02)"],
  meta: [{
    lbl: 'Engagement',
    v: '4 weeks'
  }, {
    lbl: 'Payment',
    v: '50% to start · 50% on delivery'
  }, {
    lbl: 'Refundable',
    v: '$125 if no workshop fits'
  }]
}, {
  n: '02',
  name: 'Production Coordination + Pre-Shipment QC',
  price: '$150',
  engagement: 'Per order, one day in Jaipur. Outside Jaipur, travel cost extra.',
  summary: "We coordinate with the workshop during production and conduct a physical pre-shipment inspection on dispatch day. Sample-vs-bulk comparison, count verification, defect check, photo report within 24 hours.",
  included: ["Production coordination during the active run (workshop comms, milestone tracking)", "One physical workshop visit in Jaipur on dispatch day", "Sample-vs-bulk comparison against your approved sample", "Defect check — category-specific (finish, stones, plating, stitching, etc.)", "Count verification against the order", "Photo report within 24 hours", "Go / no-go recommendation with rework coordination if needed"],
  excluded: ["Travel & accommodation outside Jaipur (billed at cost, typically $80–$200)", "Formal third-party certification (SGS, Bureau Veritas)", "Workshop rework charges (paid directly to workshop)"],
  meta: [{
    lbl: 'Engagement',
    v: 'Per order'
  }, {
    lbl: 'Payment',
    v: 'Prepaid before QC visit'
  }, {
    lbl: 'Outside Jaipur',
    v: 'Jodhpur · Sanganer · Mumbai · Delhi'
  }]
}, {
  n: '03',
  name: 'Packaging, Logistics & Documentation Support',
  price: '$250',
  engagement: 'Per shipment',
  summary: "We handle the last-mile work after production is approved — coordinating packaging specs with the workshop, arranging international shipment, and managing export documentation so you receive a clean, customs-ready consignment.",
  included: ["Packaging coordination with the workshop (poly bags, boxes, labels per your spec)", "Courier or freight forwarder coordination (DHL, FedEx, sea freight as required)", "Export documentation — commercial invoice, packing list, certificate of origin", "HS code guidance for your destination country", "Shipment tracking and delivery confirmation"],
  excluded: ["Actual shipping cost (paid to courier or forwarder at quoted rate)", "Customs duty in destination country (paid on arrival)", "Insurance — optional, billed at cost if you opt in"],
  meta: [{
    lbl: 'Engagement',
    v: 'Per shipment'
  }, {
    lbl: 'Payment',
    v: 'Prepaid before dispatch'
  }, {
    lbl: 'Docs',
    v: 'Invoice · packing list · COO · HS codes'
  }]
}];
const FAQ = [{
  q: "Can I use just one work unit?",
  a: "Yes. If you already have a workshop and just want pre-shipment QC, you can engage us only for Unit 02. If your workshop handles their own shipping but you need documentation help, you can engage us only for Unit 03. Pick what you need."
}, {
  q: "Do you mark up workshop prices?",
  a: "No. You pay the workshop directly at their quoted price. Our fees come from you only — no supplier commissions, no hidden margins."
}, {
  q: "What if the QC finds defects?",
  a: "We coordinate rework with the workshop before dispatch. If a second QC visit is needed after rework, it's billed at $150 (or actuals if outside Jaipur). Most orders don't require a second visit."
}, {
  q: "Do you do retainers for ongoing production?",
  a: "Yes — for brands running multiple production cycles per quarter, a monthly retainer often makes more sense than per-order pricing. Mention it on the fit call and we'll scope it based on your volume."
}, {
  q: "Are there refunds if a vendor doesn't work out?",
  a: "On Unit 01 (Vendor Search), if we can't surface a workshop you'd actually order from after the sample round, we refund the second half ($125). The first half covers our research time and is non-refundable."
}, {
  q: "What categories do you cover at these prices?",
  a: "Jewellery is our deepest network. We also handle handicrafts, home furnishings, furniture, and handcrafted apparel where the workshop is in our network or accessible from Jaipur. For categories outside Jaipur, the QC unit may include travel costs."
}];
function PricingV2Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageNav, {
    active: "pricing"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Indibuying"), " \xA0/\xA0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Pricing")), /*#__PURE__*/React.createElement("h1", null, "Pricing by the work,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "not by the package.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Pick the parts of the sourcing process where you want our help, and pay only for those. No retainers, no commitments, no hidden markups."), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn lg"
  }, "Book a fit call ", /*#__PURE__*/React.createElement(ArrowIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#typical",
    className: "btn ghost"
  }, "See a typical engagement \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How we price"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 680
    }
  }, "Three discrete work units. Use one, two, or all three."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 18,
      maxWidth: 580
    }
  }, "Most clients use one, two, or all three. They're sequenced \u2014 most useful in order \u2014 but you can engage us for any single piece independently.")), /*#__PURE__*/React.createElement("div", {
    className: "side-note"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Workshop costs"), "Workshop production is paid by you directly to the workshop at their quoted price. We don't take supplier commissions or add margins. Our fees come from you only.")), /*#__PURE__*/React.createElement("div", {
    className: "units-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row header"
  }, /*#__PURE__*/React.createElement("div", null, "Work unit"), /*#__PURE__*/React.createElement("div", null, "Price"), /*#__PURE__*/React.createElement("div", null, "Engagement")), UNITS.map(u => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: u.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)',
      marginRight: 8,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900
    }
  }, u.n), u.name), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, u.price), /*#__PURE__*/React.createElement("div", {
    className: "eng"
  }, u.engagement))), /*#__PURE__*/React.createElement("div", {
    className: "units-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "strong"
  }, "$650"), /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, "Full sourcing engagement using all three. Most clients start with just vendor search and add the others as production progresses."))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The three work units, in detail"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12
    }
  }, "What's actually included."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, UNITS.map(u => /*#__PURE__*/React.createElement("div", {
    className: "unit",
    key: u.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "leftcol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, u.n), /*#__PURE__*/React.createElement("div", {
    className: "price-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "p1"
  }, u.price), /*#__PURE__*/React.createElement("span", {
    className: "p2"
  }, u.engagement.split(',')[0]))), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h3", null, u.name), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, u.summary), /*#__PURE__*/React.createElement("div", {
    className: "lists"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "What's included"), /*#__PURE__*/React.createElement("ul", {
    className: "incl"
  }, u.included.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 10
  })), x)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "What's not included"), /*#__PURE__*/React.createElement("ul", {
    className: "excl"
  }, u.excluded.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    size: 10
  })), x))))), /*#__PURE__*/React.createElement("div", {
    className: "meta-row"
  }, u.meta.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.lbl
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, m.lbl), /*#__PURE__*/React.createElement("span", null, m.v)))))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    id: "typical"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How a typical engagement runs"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "Eight to twelve weeks, three pieces of work."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 14,
      maxWidth: 620
    }
  }, "Most first-time buyers use all three work units in sequence. Here's how the timing typically lines up."), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, "Week 1 \u2013 4"), /*#__PURE__*/React.createElement("h4", null, "Vendor search & sampling"), /*#__PURE__*/React.createElement("p", null, "We find the workshop and translate your references in person. You approve a sample."), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$250")), /*#__PURE__*/React.createElement("div", {
    className: "slot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, "Week 5 \u2013 10"), /*#__PURE__*/React.createElement("h4", null, "Production & QC visit"), /*#__PURE__*/React.createElement("p", null, "You pay the workshop directly. We coordinate during production, then do the pre-shipment visit on dispatch day."), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$150")), /*#__PURE__*/React.createElement("div", {
    className: "slot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, "Week 11 \u2013 12"), /*#__PURE__*/React.createElement("h4", null, "Packaging, logistics & docs"), /*#__PURE__*/React.createElement("p", null, "We handle shipment logistics and export documentation. You receive a clean, customs-ready consignment."), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$250"))), /*#__PURE__*/React.createElement("div", {
    className: "total-bar"
  }, /*#__PURE__*/React.createElement("strong", null, "$650 total fees"), /*#__PURE__*/React.createElement("span", null, "plus actual workshop production costs and shipping, paid by you directly. No surprises, no markups.")))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Common questions"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12
    }
  }, "Before you book a call."), /*#__PURE__*/React.createElement(Faq, {
    items: FAQ
  }))), /*#__PURE__*/React.createElement(ClosingCTA, {
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Get started in a ", /*#__PURE__*/React.createElement("em", null, "20-minute fit call.")),
    sub: "We'll confirm pricing for your specific case \u2014 especially if your workshop is outside Jaipur \u2014 before any engagement starts."
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.PricingV2Page = PricingV2Page;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Case study"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "Real shipments. Real ops. Real follow-through."), /*#__PURE__*/React.createElement("div", {
    className: "proof-quote"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("blockquote", null, "\"I was about to fly to Mumbai myself. Instead I got photos of every sample on WhatsApp, picked one, and the first container shipped six weeks later. That used to take us a year.\""), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Mariana Ortiz"), " \xB7 Head of Buying, Casabella Living (US)", /*#__PURE__*/React.createElement("br", null), "Home textiles \xB7 12 SKUs \xB7 shipped Q3"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn secondary sm"
  }, "Read the full case study \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "photo"
  }))));
}
window.Proof = Proof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteForm.jsx
try { (() => {
function QuoteForm() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    category: 'apparel',
    volume: '500-2000',
    target: '',
    name: '',
    company: '',
    email: '',
    notes: ''
  });
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const next = () => setStep(s => Math.min(3, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));
  const cats = [{
    id: 'apparel',
    name: 'Apparel & textiles',
    sub: 'Knits, woven, home textiles'
  }, {
    id: 'home',
    name: 'Home & kitchen',
    sub: 'Brassware, wood, ceramics'
  }, {
    id: 'beauty',
    name: 'Beauty & wellness',
    sub: 'Skin, hair, supplements'
  }, {
    id: 'organic',
    name: 'Organic & ayurveda',
    sub: 'Tea, spices, herbs'
  }, {
    id: 'hardware',
    name: 'Hardware & tools',
    sub: 'Bearings, fittings, hand tools'
  }, {
    id: 'other',
    name: 'Something else',
    sub: 'Tell us in the notes'
  }];
  const vols = ['<500', '500–2,000', '2,000–10,000', '10,000+'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section alt",
    id: "quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Get a quote"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12
    }
  }, "Tell us the spec.", /*#__PURE__*/React.createElement("br", null), "We'll reply within ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--brand-green)',
      fontStyle: 'italic'
    }
  }, "one working day.")), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 18,
      maxWidth: 380
    }
  }, "No sign-up. No NDA gate. A real ops manager reviews your inquiry and comes back with a shortlist, a price range, and a clear next step."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Free for the first inquiry', 'Reply within 24 hours', 'Direct WhatsApp once engaged'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: '500 14px var(--font-ui)',
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--brand-green-100)',
      color: 'var(--brand-green-700)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), x)))), /*#__PURE__*/React.createElement("div", {
    className: "quote-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dot" + (i <= step ? ' active' : '')
  }))), step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "What are you sourcing?"), /*#__PURE__*/React.createElement("div", {
    className: "step-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile-grid"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: "tile" + (data.category === c.id ? ' selected' : ''),
    onClick: () => set('category', c.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "t-sub"
  }, c.sub))))), /*#__PURE__*/React.createElement("div", {
    className: "step-actions"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--font-ui)',
      color: 'var(--fg-3)'
    }
  }, "Step 1 of 4"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: next
  }, "Continue ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "How many units per month?"), /*#__PURE__*/React.createElement("div", {
    className: "step-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile-grid"
  }, vols.map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    className: "tile" + (data.volume === v ? ' selected' : ''),
    onClick: () => set('volume', v)
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-name"
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "t-sub"
  }, "units / month")))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Target unit price (USD, optional)"), /*#__PURE__*/React.createElement("input", {
    value: data.target,
    onChange: e => set('target', e.target.value),
    placeholder: "e.g. 4.20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "help"
  }, "Helps us shortlist factories that fit your margin."))), /*#__PURE__*/React.createElement("div", {
    className: "step-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn secondary sm",
    onClick: back
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: next
  }, "Continue ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Where do we send the shortlist?"), /*#__PURE__*/React.createElement("div", {
    className: "step-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Your name"), /*#__PURE__*/React.createElement("input", {
    value: data.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Mariana Ortiz"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    value: data.company,
    onChange: e => set('company', e.target.value),
    placeholder: "Casabella Living"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Work email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: data.email,
    onChange: e => set('email', e.target.value),
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Notes (optional)"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: data.notes,
    onChange: e => set('notes', e.target.value),
    placeholder: "Materials, certifications, target ship date\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "step-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn secondary sm",
    onClick: back
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: next
  }, "Send inquiry ", /*#__PURE__*/React.createElement(Icon.arrow, null)))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "quote-confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon.check, {
    size: 28
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24
    }
  }, "Got it. We'll reply within a day."), /*#__PURE__*/React.createElement("p", {
    className: "p-small",
    style: {
      maxWidth: 320
    }
  }, "Inquiry ", /*#__PURE__*/React.createElement("code", null, "IB-", Math.floor(10000 + Math.random() * 90000)), " assigned to an ops manager in Mumbai. Check your inbox (and spam, just in case)."), /*#__PURE__*/React.createElement("button", {
    className: "btn secondary sm",
    onClick: () => setStep(0)
  }, "Send another \u2192"))))));
}
window.QuoteForm = QuoteForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesPage.jsx
try { (() => {
// /services — Services page

const SERVICES = [{
  id: 'vendor',
  n: '01',
  name: 'Vendor Sourcing + Sample Coordination',
  for: 'For brands placing their first order from Jaipur, or replacing a supplier that didn\'t work out.',
  desc1: 'A scoped two-to-three week engagement. We take your design brief, target price points, category, and volume requirements, then deliver a shortlist of vetted workshops from our network — usually two to three options matched to what you actually need.',
  desc2: 'You see capability profiles, sample work, and our recommendation. We coordinate sample requests directly with the workshop and walk through your references with the karigar in person, so the sample comes back close to what you asked for the first time around.',
  desc3: 'You approve the workshop, and we make the introduction. From there, you can run the order yourself, or add pre-shipment QC for added certainty.',
  get: ['A shortlist of 2–3 vetted workshops matched to your category and spec', 'Sample coordination with in-person reference review', 'A capability and pricing report on each workshop', 'Direct introduction once you approve the choice'],
  solves: ['Months of cold outreach to workshops you can\'t verify', 'Sample-vs-reference mismatch caused by translation gaps', 'The new-buyer pricing premium (workshops quote 15–25% higher to strangers)', 'Risk of paying a middleman who subcontracts your order to someone else'],
  meta: [{
    lbl: 'Timeline',
    v: '2–3 weeks'
  }, {
    lbl: 'Categories',
    v: 'Jewellery · Handicrafts · Furniture · Textiles · Apparel'
  }, {
    lbl: 'Complex cycles',
    v: '3–4 weeks for furniture & technical apparel'
  }],
  badges: ['Jewellery', 'Handicrafts', 'Furniture', 'Home furnishings', 'Apparel'],
  cta: 'Book a fit call'
}, {
  id: 'qc',
  n: '02',
  name: 'Pre-Shipment QC',
  for: 'For brands placing production orders who want certainty before goods leave India.',
  desc1: "The single highest-risk moment in any production cycle is the gap between 'the workshop says it's done' and 'the goods arrive at your warehouse.' Pre-Shipment QC closes that gap.",
  desc2: 'Our team visits the workshop in person before dispatch. We compare the bulk run against the approved sample, check finish consistency, verify counts, test material quality, and look for the defects that quietly drift in between sample and bulk production.',
  desc3: "You get a photo report within 24 hours of the inspection and a clear go/no-go recommendation. If we identify issues, we coordinate rework with the workshop before anything ships. Bad batches don't leave India.",
  get: ['Physical workshop visit before dispatch', 'Sample-vs-bulk comparison across multiple sample points', 'Category-specific defect checks (plating micron, color-fastness, joint quality, stitch quality)', 'Count verification against the order', 'Photo report within 24 hours', 'Go / no-go recommendation, with rework coordination if needed'],
  solves: ['Plating that wears off in three weeks (lying about micron thickness on jewellery)', 'Block-print colors that bleed on first wash (poor dye-fixing on textiles)', 'Furniture joints that loosen in shipping (poor construction)', 'Stitch density and seam strength issues on apparel', 'Pieces that match each other but not the approved sample', 'Defective goods shipping to your warehouse with no recourse'],
  meta: [{
    lbl: 'Pricing',
    v: 'Per-order · scoped on fit call'
  }, {
    lbl: 'Inspection',
    v: 'Category-specific defect checks'
  }, {
    lbl: 'Report',
    v: '24-hour photo report · go/no-go'
  }],
  badges: ['Most popular'],
  popular: true,
  cta: 'Add QC to your next order'
}, {
  id: 'retainer',
  n: '03',
  name: 'India Operations Retainer',
  for: 'For brands running 2+ production cycles per quarter, scaling across multiple workshops.',
  desc1: "If you're past your first or second order and production has become a real part of your operations, the per-order model starts to break down. You need someone who knows your designs, your workshops, and your production calendar — not someone you re-onboard every cycle.",
  desc2: 'The retainer is your ongoing India team. We coordinate across multiple workshops in parallel, run weekly QC visits during active production, plan your production calendar around Indian shutdowns (Diwali, Holi, summer break), manage workshop communication in your timezone, and resolve issues in real time without you needing to be the foreman.',
  desc3: 'You get one point of contact for everything that happens in India. One channel, one person responsible, one source of truth.',
  get: ['Multi-workshop coordination across your full production footprint', 'Weekly QC visits during active production', 'Production calendar planning aligned to your launch dates', 'Single accountable contact (no WhatsApp groups, no missing updates)', 'Real-time issue resolution', 'Quarterly cost benchmarking against your current quotes'],
  solves: ['Running production from your laptop at 2 AM', 'Coordinating three workshops in three time zones', 'Production timeline shocks (Diwali shutdowns, sudden workshop unavailability)', 'Quality drift as you scale across more workshops', 'Workshop communication eating 10–15 hours of your week'],
  meta: [{
    lbl: 'Cadence',
    v: 'Monthly · cancel with 30 days notice'
  }, {
    lbl: 'Qualifies',
    v: 'Typically after 2–3 successful orders'
  }, {
    lbl: 'Scales from',
    v: '1 cycle / month · 1–2 workshops'
  }],
  badges: ['Multi-workshop', 'Ongoing'],
  cta: 'Discuss a retainer'
}];
const DONTS = [{
  strong: "We don't source fine jewellery",
  rest: " where certified loose diamonds or high-value precious stones are the primary value driver."
}, {
  strong: "We don't source commodity garment production",
  rest: " — we focus on handcrafted, block-printed, and artisanal apparel."
}, {
  strong: "We don't mark up workshop production costs.",
  rest: " You pay the workshop directly at their quoted price. Our fees come from you only."
}, {
  strong: "We don't take commissions from suppliers.",
  rest: " Our income is your fees, transparently."
}, {
  strong: "We don't list workshops without vetting them.",
  rest: " Every workshop in our network has been physically visited and capability-audited."
}];
const STEPS = [{
  n: '01',
  h: 'Fit call (20 minutes, free)',
  p: "We understand your category, designs, target prices, volumes, and current pain points. If we're not the right fit, we say so and point you elsewhere."
}, {
  n: '02',
  h: 'Workshop matching',
  p: 'We shortlist workshops from our network based on your specs. You see capability profiles, sample work, and our recommendation.'
}, {
  n: '03',
  h: 'Sample round',
  p: 'We coordinate sample production. Most designs hit spec in one or two iterations because we translate references in person, not over email.'
}, {
  n: '04',
  h: 'Production with optional QC',
  p: "You place the order. If you've added QC, we visit during production and inspect before dispatch."
}, {
  n: '05',
  h: 'Shipment and handover',
  p: 'The workshop ships directly to you. We coordinate documentation and tracking.'
}];
function ServicesPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageNav, {
    active: "services"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "home.html"
  }, "Indibuying"), " \xA0/\xA0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Services")), /*#__PURE__*/React.createElement("h1", null, "What we do.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Three services, designed as a sequence.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "We help brands source from Jaipur and nearby clusters across jewellery, handicrafts, furniture, home furnishings, and handcrafted apparel \u2014 finding the right workshop, getting samples that match your references, and inspecting production before it ships."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 10
    }
  }, "You don't need to commit to all three on day one. Most clients start with vendor sourcing, add QC on their first production order, and move to a retainer once they're running multiple cycles per quarter."), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn lg"
  }, "Book a fit call ", /*#__PURE__*/React.createElement(ArrowIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#vendor",
    className: "btn ghost"
  }, "Start at vendor sourcing \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    className: "service-block" + (s.popular ? ' popular' : ''),
    id: s.id,
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.name), /*#__PURE__*/React.createElement("div", {
    className: "for"
  }, s.for), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, s.desc1), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, s.desc2), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, s.desc3), s.badges && /*#__PURE__*/React.createElement("div", {
    className: "badge-row"
  }, s.badges.map(b => /*#__PURE__*/React.createElement("span", {
    className: "tag",
    key: b
  }, b))), /*#__PURE__*/React.createElement("div", {
    className: "meta-strip"
  }, s.meta.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.lbl
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, m.lbl), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, m.v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn"
  }, s.cta, " ", /*#__PURE__*/React.createElement(ArrowIcon, null)))), /*#__PURE__*/React.createElement("div", {
    className: "lists"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("h5", null, "What you get"), /*#__PURE__*/React.createElement("ul", null, s.get.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 10
  })), x)))), /*#__PURE__*/React.createElement("div", {
    className: "panel solves"
  }, /*#__PURE__*/React.createElement("h5", null, "What it solves"), /*#__PURE__*/React.createElement("ul", null, s.solves.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    size: 10
  })), x))))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How a typical engagement runs"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 760
    }
  }, "Whether it's a one-time engagement or an ongoing retainer, the work follows the same rhythm."), /*#__PURE__*/React.createElement("div", {
    className: "steps-list"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step-row",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we don't do"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "We're specific about what we do well \u2014 and equally specific about what we don't."), /*#__PURE__*/React.createElement("div", {
    className: "dont-grid"
  }, DONTS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "dont-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    size: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("strong", null, d.strong), d.rest)))))), /*#__PURE__*/React.createElement("section", {
    className: "section tight",
    style: {
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 12,
      maxWidth: 720
    }
  }, "Pricing depends on category, scope, and volume."), /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      marginTop: 14,
      maxWidth: 680
    }
  }, "We share specific numbers on the fit call once we understand your situation. Engagement bands are published on the pricing page."), /*#__PURE__*/React.createElement("div", {
    className: "pricing-ref"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copy"
  }, /*#__PURE__*/React.createElement("h4", null, "Two pricing models. Pick whichever fits."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Bundled bands"), " for vendor sourcing, QC, and retainer engagements \u2014 quoted on the fit call."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Unbundled work units"), " ($250 / $150 / $250) for buyers who want a single piece of work without committing to a bundle.")), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "pricing-v2.html",
    className: "btn"
  }, "See pricing ", /*#__PURE__*/React.createElement(ArrowIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn outline"
  }, "Book a fit call"))))), /*#__PURE__*/React.createElement(ClosingCTA, {
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Ready to ", /*#__PURE__*/React.createElement("em", null, "start?")),
    sub: "A 20-minute call. We'll ask about your category, designs, supplier history, and what's blocking you right now. If we can help, we'll tell you how. If we can't, we'll point you somewhere that can."
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.ServicesPage = ServicesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TopNav.jsx
try { (() => {
function TopNav({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "lockup"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Indibuying")), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "item"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#categories",
    className: "item"
  }, "Categories"), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "item"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#proof",
    className: "item"
  }, "Case studies"), /*#__PURE__*/React.createElement("div", {
    className: "nav-spacer"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "item"
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    onClick: onQuote
  }, "Get a quote"));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

})();
