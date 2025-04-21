import createPlugin from "./utils/plugin";

export default createPlugin.withOptions(
  (options: any) => {
    return ({
      addBase,
      addComponents
    }: {
      addBase: Function;
      addComponents: Function;
      addUtilities: Function;
    }) => {
      const { name, selector, components, ...colors } = options;
      if (!name) throw new Error("Name is required for the plugin");
      if (!selector) throw new Error("Selector is required for the plugin");
      const isdefault = colors["default-theme"];
      delete colors["default-theme"];
      addBase({
        [selector]: {
          ...colors
        }
      });
      // Add components to Tailwind. execute only if defaultTheme is true to prevent dublication
      if (isdefault) {
        addComponents({
          ...components
        });
      }
    };
  },
  (variables) => {
    return {
      theme: {
        extend: {
          ...variables
        }
      },
      plugins: [
        require("@tailwindcss/forms"), // Styles for form elements
        require("@tailwindcss/typography"), // Prose class
        require("@tailwindcss/aspect-ratio") // Aspect ratio utilities
      ]
    };
  }
);
