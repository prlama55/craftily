/** @type {import('vite').UserConfig} */
import vue from "@vitejs/plugin-vue";
import path from "path";

export default {
  plugins: [vue()],
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
