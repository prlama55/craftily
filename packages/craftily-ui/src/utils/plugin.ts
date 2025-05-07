import type { Config, PluginCreator } from 'tailwindcss/plugin';
import { init } from './init';
import components from '../styles';
import variables from './variables';

export interface OptionsFunction {
  (options: any): {
    handler: ReturnType<PluginCreator>;
    config: Partial<Config> | undefined;
  };
  __isOptionsFunction?: boolean;
}

interface ThemeObject {
  [key: string]: string | number | ThemeObject | Array<string | number>;
}

interface FlattenedTheme {
  [key: string]: string | number;
}

const flattenTheme = (themeObj: ThemeObject, prefix: string = ''): FlattenedTheme => {
  const result: FlattenedTheme = {};

  for (const [key, value] of Object.entries(themeObj)) {
    const variableName = prefix ? `${prefix}-${key}` : key;
    if (key.includes('__CSS_VALUES__')) continue; // Skip CSS values

    if (typeof value === 'string' || typeof value === 'number') {
      result[`--${variableName}`] = value;
    } else if (Array.isArray(value)) {
      result[`--${variableName}`] = value[0]; // e.g. fontSize: [size, options]
    } else if (typeof value === 'object') {
      Object.assign(result, flattenTheme(value as ThemeObject, variableName));
    }
  }

  return result;
};

/**
 * Utility object for creating plugins with configurable options and associated configuration.
 */
const createPlugin = {
  /**
   * Creates a plugin with options and a configuration function.
   *
   * @param pluginCreatorFunction - A function that creates the plugin. It receives an object containing
   *                                the options and components, and must return a function (the plugin handler).
   * @param configFunction - A function that generates a partial configuration object based on provided variables.
   *                         It receives a record of variables and returns a partial configuration object.
   * @returns A function that accepts options for the plugin and returns an object containing the plugin handler
   *          and its associated configuration.
   *
   * @throws {Error} If the provided options are not an object.
   * @throws {Error} If the `name` property is missing in the options.
   * @throws {Error} If the `selector` property is missing in the options.
   * @throws {Error} If the plugin creator function does not return a function.
   */
  withOptions: async (
    pluginCreatorFunction: PluginCreator,
    configFunction: (variables: Record<string, any>) => Partial<Config>
  ) => {
    try {
      init();
    } catch (error: any) {
      // Handle the error and throw a new error with a custom message
      throw new Error(`Error initializing plugin: ${error.message}`);
    }
    const optionsFunction: OptionsFunction = (options) => {
      if (typeof options !== 'object') throw new Error('Options must be an object');

      if (!options.name) throw new Error('Plugin name is required');
      if (!options.selector) throw new Error('Plugin selector is required');
      const plugin = pluginCreatorFunction({
        ...options,
        flattenTheme,
        components: { ...components },
      });
      if (typeof plugin !== 'function') {
        throw new Error('Plugin must be a function');
      }
      const config = configFunction(variables);

      return {
        handler: plugin,
        config,
      };
    };

    optionsFunction.__isOptionsFunction = true;
    return optionsFunction;
  },
};

export { createPlugin as default };
