import nextConfig from 'eslint-config-next'

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default eslintConfig
