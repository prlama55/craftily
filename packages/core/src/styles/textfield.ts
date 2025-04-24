export default {
  /* Base textfield/textarea style */
  ".textfield": {
    "font-family": "sans-serif",
    "font-size": "var(--textfield-font-size, var(--text-md))",
    padding: "var(--textfield-padding)",
    border: "var(--textfield-border)",
    "border-radius": "var(--textfield-border-radius)",
    background: "var(--textfield-bg)",
    color: "var(--textfield-color)",
    outline: "var(--textfield-outline)",
    width: "100%",
    "box-sizing": "border-box",
    transition: "border-color 0.2s ease",
    resize: "vertical"
  },
  ".textfield:focus": {
    "border-color": "var(--textfield-border-focus, var(--color-primary))",
    outline: "var(--textfield-outline,)"
  },
  /* Size variants */
  ".textfield-xs": {
    "--textfield-font-size": "var(--text-xs)",
    "--textfield-padding": "var(--spacing, 0.25rem) 0.5rem"
  },
  ".textfield-sm": {
    "--textfield-font-size": "var(--text-sm)",
    "--textfield-padding": "var(--spacing, 0.25rem) 0.75rem"
  },
  ".textfield-md": {
    "--textfield-font-size": "var(--text-md)",
    "--textfield-padding": "var(--spacing, 0.25rem) 1rem"
  },
  ".textfield-lg": {
    "--textfield-font-size": "var(--text-lg)",
    "--textfield-padding": "var(--spacing, 0.25rem) 1.25rem"
  },
  /* Color variants */
  ".textfield-primary": {
    "--textfield-border": "1px solid var(--color-primary)",
    "--textfield-border-focus": "var(--color-primary)"
  },
  ".textfield-error": {
    "--textfield-border": "1px solid var(--color-error)",
    "--textfield-border-focus": "var(--color-error)"
  },
  ".textfield-success": {
    "--textfield-border": "1px solid var(--color-success)",
    "--textfield-border-focus": "var(--color-success)"
  },
  /* Style variants */
  ".textfield-outlined": {
    "--textfield-bg": "#transparent",
    "--textfield-border": "1px solid var(--color-primary, var(--color-primary))"
  },
  ".textfield-filled": {
    "--textfield-bg": "var(--color-base)",
    "--textfield-border": "none",
    "--textfield-outline":
      "2px solid var(--textfield-border-focus, var(--color-primary))"
  },
  ".textfield-underlined": {
    "--textfield-border": "none",
    "--textfield-border-radius": "0",
    "border-bottom": "2px solid var(--color-primary)",
    background: "transparent"
  }
};
