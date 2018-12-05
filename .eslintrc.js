module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-named-as-default': 0,
  },
};
