module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    "func-names": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "arrow-parens": "off",
    "camelcase": "off",
    "max-len": "off",
  },
};
