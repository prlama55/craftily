import createPlugin from "./utils/plugin";

/**
 * A Tailwind CSS plugin generator that allows customization of base styles, components, and themes.
 *
 * @param options - The configuration options for the plugin.
 * @param options.name - The name of the plugin (required).
 * @param options.selector - The CSS selector to apply the styles to (required).
 * @param options.components - The components to be added to Tailwind CSS.
 * @param options.default-theme - A flag indicating whether the theme is the default theme.
 * @param options.[key: string] - Additional color properties for the plugin.
 *
 * @throws {Error} If the `name` or `selector` option is not provided.
 *
 * @returns A Tailwind CSS plugin configuration object.
 *
 * @example
 * ```typescript
 * export default createPlugin.withOptions(
 *   (options) => {
 *     return ({ addBase, addComponents }) => {
 *       // Plugin logic here
 *     };
 *   },
 *   (variables) => {
 *     return {
 *       theme: {
 *         extend: {
 *           ...variables
 *         }
 *       },
 *       plugins: [
 *         require("@tailwindcss/forms"),
 *         require("@tailwindcss/typography"),
 *         require("@tailwindcss/aspect-ratio")
 *       ]
 *     };
 *   }
 * );
 * ```
 */
export default createPlugin.withOptions(
  (options: any) => {
    return ({
      addBase,
      addComponents
    }: {
      addBase: Function;
      addComponents: Function;
    }) => {
      const { name, selector, components, ...colors } = options;
      if (!name) throw new Error("Name is required for the plugin");
      if (!selector) throw new Error("Selector is required for the plugin");
      const isDefault = colors["default-theme"];
      delete colors["default-theme"];
      addBase({
        [selector]: {
          ...colors
        }
      });
      // Add components to Tailwind. execute only if defaultTheme is true to prevent duplication
      if (isDefault) {
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
