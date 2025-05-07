export default {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
