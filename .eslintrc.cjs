module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier", // sempre por último
  ],
  settings: { react: { version: "detect" } },
  env: { browser: true, es2021: true, node: true },
  rules: {
    // React 17+ (Vite) não precisa de import React no topo
    "react/react-in-jsx-scope": "off",

    // Ordenação automática de imports (grupos + linhas em branco)
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // Opcional: reforça linha em branco entre grupos se quiser usar import/order
    "import/order": ["error", { "newlines-between": "always" }],

    // TS/gerais
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
