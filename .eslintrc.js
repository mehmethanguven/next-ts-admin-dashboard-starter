module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  ignorePatterns: [
    'tailwind.config.js',
    'postcss.config.js',
    'next.config.js',
    '.eslintrc.cjs',
  ],
  root: true,
}
