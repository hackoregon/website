const path = require("path");

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier", "emotion", "react-hooks", "graphql"],
  rules: {
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "warn",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/label-has-for": 0,
    "prefer-arrow-callback": 0,
    "no-underscore-dangle": 0,
    "react/no-unescaped-entities": 0,
    "func-names": 2,
    "react/jsx-filename-extension": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 1,
    "arrow-body-style": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.story.js", "**/*.test.js"]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
        tagName: "graphql"
      }
    ]
  },
  globals: {
    __DEV__: true,
    window: true,
    document: true,
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    before: true,
    after: true
  },
  overrides: [
    {
      files: ["*.test.js"],
      rules: {
        "no-unused-expressions": "off"
      }
    }
  ]
};
