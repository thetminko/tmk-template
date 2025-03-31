/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  bracketSameLine: true,
  printWidth: 120,
  quoteProps: 'consistent',
  tailwindConfig: './libs/core/web/tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss']
};

module.exports = config;
