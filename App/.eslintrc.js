module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',          // Regras recomendadas do ESLint
    'plugin:react/recommended',    // Regras recomendadas para React
    'plugin:react-native/all',     // Regras para React Native
  ],
  parserOptions: {
    ecmaVersion: 12,               // Definindo a versão do ECMAScript
    sourceType: 'module',          // Para usar imports (módulos)
  },
  settings: {
    react: {
      version: 'detect',           // Detecta a versão do React automaticamente
    },
  },
  rules: {
    'react/prop-types': 'off',     // Desativa a verificação de `prop-types` (opcional)
  },
};
