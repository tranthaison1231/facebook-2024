import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/jsx-key': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always'
        }
      ]
    },
    ignores: ['tailwind.config.js', '.prettierrc.cjs']
  }
]
