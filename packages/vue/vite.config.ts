/** @type {import('vite').UserConfig} */
import vue from "@vitejs/plugin-vue";
import path from "path";
import ViteDts from "vite-plugin-dts"; // Import the ViteDts plugin

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("craftily-")
        }
      }
    }),
    ViteDts({
      // Plugin options (optional)
      insertTypesEntry: true // Automatically adds the `types` entry to package.json
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry for Vue components
      name: "VueUI",
      fileName: (format: string): string => `index.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
      external: ["vue"] as string[], // External dependencies (Vue)
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    // Ensure declaration files are included in the build output
    outDir: "dist",
    declaration: true, // Instruct Vite to include .d.ts files
    declarationDir: "dist/types" // Output the .d.ts files to the types directory
  }
};
