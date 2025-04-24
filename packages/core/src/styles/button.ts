export default {
  ".btn": {
    background: "var(--btn-bg, var(--color-base))",
    color: "var(--btn-content, var(--color-base-content))",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--btn-border-radius, var(--radius-sm, 0.1rem))",
    fontWeight: "var(--font-weight-normal, 500)",
    cursor: "pointer",
    transition: "background 0.4s ease, color 0.4s ease",
    border: "var(--btn-border, none)",
    boxShadow: "var(--btn-box-shadow, none)",
    padding: "var(--btn-padding, 0.5rem)",
    fontSize: "var(--btn-font-size, 1rem)",
    height: "var(--btn-height, calc(var(--spacing, 0.25) * 8))",
    "outline-style": "var(--btn-outline-style, none)",
    gap: "var(--spacing, 0.25rem)"
  },
  ".btn:hover": {
    opacity: 0.8,
    "--btn-box-shadow": "none"
  },
  ".btn:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
    "--btn-box-shadow": "none"
  },
  ".btn:active": {
    transform: "translateY(2px)"
  },
  ".btn-xs": {
    "--btn-border-radius": "2px",
    "--btn-height": "calc(var(--spacing, 0.25rem) * 6)",
    "--btn-font-size": "var(--text-xs)"
  },
  ".btn-sm": {
    "--btn-border-radius": "var(--spacing, 0.25rem)",
    "--btn-height": "calc(var(--spacing) * 9)",
    "--btn-font-size": "var(--text-sm)"
  },
  ".btn-md": {
    "--btn-border-radius": "var(--radius-xs, var(--spacing))",
    "--btn-height": "calc(var(--spacing) * 12)",
    "--btn-font-size": "var(--text-md)"
  },
  ".btn-lg": {
    "--btn-border-radius": "var(--radius-sm, var(--spacing))",
    "--btn-height": "calc(var(--spacing) * 15)",
    "--btn-font-size": "var(--text-lg)",
    "--btn-padding": "calc(var(--spacing) * 2)"
  },
  ".btn-xl": {
    "--btn-border-radius": "var(--radius-md, var(--spacing))",
    "--btn-height": "calc(var(--spacing) * 18)",
    "--btn-font-size": "var(--text-xl)",
    "--btn-padding": "calc(var(--spacing) * 4)"
  },
  ".btn-test": {
    "--btn-bg": "var(--color-red-700)",
    "--btn-content": "var(--color-primary-content)",
    "--btn-box-shadow":
      "0 0 0 0 rgba(0,0,0,0.24), 0 0.01rem 0.05rem 0 rgba(0,0,0,0.19)"
  },
  ".btn-primary": {
    "--btn-bg": "var(--color-primary)",
    "--btn-content": "var(--color-primary-content)",
    "--btn-box-shadow":
      "0 0 0 0 rgba(0,0,0,0.24), 0 0.01rem 0.05rem 0 rgba(0,0,0,0.19)"
  },
  ".btn-secondary": {
    "--btn-bg": "var(--color-secondary)",
    "--btn-content": "var(--color-secondary-content)",
    "--btn-box-shadow":
      "0 0 0 0 rgba(0,0,0,0.24), 0 0.01rem 0.05rem 0 rgba(0,0,0,0.19)"
  },
  ".btn-outline": {
    "--btn-bg": "transparent",
    "--btn-content": "var(--color-primary)",
    "--btn-outline-style": "solid",
    "outline-width": "1px"
  },
  ".btn-ghost": {
    "--btn-bg": "transparent",
    "--btn-content": "var(--color-primary)",
    "--btn-outline-style": "none"
  },
  ".btn-group": {
    display: "flex",
    "flex-flow": "row",
    gap: "1px",
    background: "var(--btn-group-bg, var(--color-base))",
    padding: "var(--spacing, 0.25rem)",
    "border-radius": "var(--btn-border-radius, var(--radius-sm, 0.1rem))"
  },
  ".btn-group:has(.btn-primary)": {
    "--btn-group-bg": "var(--color-primary, var(--color-base))"
  },
  ".btn-group:has(.btn-secondary)": {
    "--btn-group-bg": "var(--color-secondary, var(--color-base))"
  },
  ".btn-group:has(.btn-accent)": {
    "--btn-group-bg": "var(--color-accent, var(--color-base))"
  },
  ".btn-group:has(.btn-ghost)": {
    "--btn-group-bg": "transparent",
    "--btn-outline-style": "none"
  },
  ".btn-group:has(.btn-outline)": {
    "--btn-group-bg": "transparent",
    "--btn-outline-style": "none",
    border: "1px solid"
  },
  ".btn-group-direction-column": {
    display: "flex",
    "flex-flow": "column"
  },
  ".btn-group .btn": {
    flex: 1,
    float: "left",
    "--btn-border-radius": "none",
    "--btn-border": "none",
    "border-left": "1px solid"
  },
  ".btn-group .btn:first-child": {
    "border-left": "none"
  },
  ".btn-group .btn:active": {
    transform: "translateY(0px)"
  },
  ".btn .icon": {
    width: "var(--btn-font-size)",
    height: "var(--btn-font-size)"
  }
};
