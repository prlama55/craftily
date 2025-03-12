import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'CraftilyComponent',
      fileName: (format) => `craftily.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
