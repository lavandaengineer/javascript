const moduleBase = [
  'eslint-config-airbnb-base',
  'eslint-config-airbnb-base/rules/strict',
  './rules/react',
  './rules/react-a11y',
];

module.exports = {
  extends: moduleBase.map(require.resolve),
  rules: {}
};
