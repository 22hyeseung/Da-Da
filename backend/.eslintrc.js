module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": "airbnb-base",
  "rules": {
      // config : 0 "off", 1 "warn" 2 "error"
      "arrow-parens": [ 2, "as-needed" ],
      "quote-props": [ 2, "always" ],
      "no-else-return": 0,
      "camelcase": 0,
      "consistent-return": 1,
      "semi": [2, "never" ],
      "no-console": 1,
      "no-var": 1,
      "max-len": [ 1, { "code": 150 } ],
      "quotes": [ 2, "single" ],
      "no-underscore-dangle": 0,
      "no-plusplus": [ 2, { "allowForLoopAfterthoughts": true }],
      "comma-dangle": [ 2, "never"],
      "no-unneeded-ternary": [ 2, { "defaultAssignment": true }],
      "object-curly-newline": [ 2, { "multiline": true }],
  }
};
