const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores:['./../allure-results', './../allure-report'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        require: "readonly",
      },

    },

  },
];
