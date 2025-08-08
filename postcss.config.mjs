/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      'postcss-preset-env': {},
      cssnano: {
        preset: 'default',
      },
    }),
  },
};

export default config;
