import eslintPluginAstro from 'eslint-plugin-astro'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'eslint-plugin-tailwindcss': eslintPluginTailwindcss
    },
    rules: {
      'prettier/prettier': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
]
