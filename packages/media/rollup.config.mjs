import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import { defineConfig } from "rollup";
import tailwindcss from "@tailwindcss/postcss";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/index.ts", // Entry point for the core package
  output: [
    {
      file: "dist/index.js", // Output file for ES module
      format: "esm",
      sourcemap: true
    },
    {
      file: "dist/index.cjs", // Output file for cjs
      format: "commonjs",
      sourcemap: true,
      exports: "auto"
    }
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      rootDir: "src"
    }),
    postcss({
      extract: true, // extracts to dist/index.css
      minimize: false, // or use cssnano for production
      plugins: [tailwindcss(), autoprefixer()]
    }),
    terser() // Minify the output
  ],
  external: [] // External dependencies (like tailwindcss)
});
