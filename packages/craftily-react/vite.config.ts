import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteDts from 'vite-plugin-dts'; // Import the ViteDts plugin

export default defineConfig({
  plugins: [react(), ViteDts()],
  build: {
    lib: {
      entry: 'src/index.ts', // Use the TypeScript entry file
      name: 'CraftilyReactPackage',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@craftily/image'], // Make sure React is treated as external
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist', // Output to the dist directory
  },
});
