const withTM = require('next-transpile-modules')([
  'ccount',
  'character-entities',
  'character-entities-legacy',
  'character-reference-invalid',
  'comma-separated-tokens',
  'hastscript',
  'hast-util-is-element',
  'hast-util-parse-selector',
  'hast-util-to-html',
  'hast-util-whitespace',
  'html-void-elements',
  'is-hexadecimal',
  'is-alphanumerical',
  'parse-entities',
  'property-information',
  'refractor',
  'space-separated-tokens',
  'stringify-entities',
  'unist-util-visit',
  'unist-util-is',
])

module.exports = withTM()
