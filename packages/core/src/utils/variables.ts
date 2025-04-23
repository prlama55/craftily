import theme from "tailwindcss/defaultTheme";
type DefaultThemeType = {
  colors: () => Record<string, any>;
  [key: string]: Record<string, any>;
  spacing: Record<string, any>;
};
const defaultTheme: DefaultThemeType = theme;
console.log(typeof defaultTheme.colors);
const colors =
  typeof defaultTheme.colors === "function"
    ? defaultTheme.colors()
    : defaultTheme.colors;
export default {
  colors: {
    ...colors, // default colors
    base: "var(--color-base)",
    "base-content": "var(--color-base-content)",
    primary: "var(--color-primary)",
    "primary-content": "var(--color-primary-content)",
    secondary: "var(--color-secondary)",
    "secondary-content": "var(--color-secondary-content)",
    accent: "var(--color-accent)",
    "accent-content": "var(--color-accent-content)",
    neutral: "var(--color-neutral)",
    "neutral-content": "var(--color-neutral-content)",
    info: "var(--color-info)",
    "info-content": "var(--color-info-content)",
    success: "var(--color-success)",
    "success-content": "var(--color-success-content)",
    warning: "var(--color-warning)",
    "warning-content": "var(--color-warning-content)",
    error: "var(--color-error)",
    "error-content": "var(--color-error-content)"
  },
  spacing: defaultTheme.spacing,
  borderRadius: defaultTheme.borderRadius,
  fontSize: defaultTheme.fontSize,
  fontFamily: defaultTheme.fontFamily,
  fontWeight: defaultTheme.fontWeight,
  lineHeight: defaultTheme.lineHeight,
  letterSpacing: defaultTheme.letterSpacing,
  boxShadow: defaultTheme.boxShadow,
  transitionTimingFunction: defaultTheme.transitionTimingFunction,
  transitionProperty: defaultTheme.transitionProperty
};
