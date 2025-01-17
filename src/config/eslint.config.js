const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        require: "readonly",
      },
    },
    files: ["**/*.js"],
  },
];
