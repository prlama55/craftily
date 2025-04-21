import type { Config, PluginCreator } from "tailwindcss/plugin";
import { init } from "./init";
import components from "../components";
import variables from "./variables";

export interface OptionsFunction {
  (options: any): {
    handler: ReturnType<PluginCreator>;
    config: Partial<Config> | undefined;
  };
  __isOptionsFunction?: boolean;
}

const createPlugin = {
  withOptions: (
    pluginCreatorFunction: PluginCreator,
    configFunction: (variables: Record<string, any>) => Partial<Config>
  ) => {
    const optionsFunction: OptionsFunction = (options) => {
      if (typeof options !== "object")
        throw new Error("Options must be an object");

      if (!options.name) throw new Error("Plugin name is required");
      if (!options.selector) throw new Error("Plugin selector is required");
      init();
      const plugin = pluginCreatorFunction({
        ...options,
        components: { ...components }
      });
      if (typeof plugin !== "function") {
        throw new Error("Plugin must be a function");
      }
      const config = configFunction(variables);

      return {
        handler: plugin,
        config
      };
    };

    optionsFunction.__isOptionsFunction = true;
    return optionsFunction;
  }
};

export { createPlugin as default };
