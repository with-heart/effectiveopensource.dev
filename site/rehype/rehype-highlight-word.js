const toHtml = require('hast-util-to-html')
const parse = require('rehype-parse')
const unified = require('unified')
const visit = require('unist-util-visit')

const CALLOUT = /__(.*?)__/g

module.exports = function rehypeHighlightWord(code) {
  const html = toHtml(code)
  const result = html.replace(
    CALLOUT,
    (_, text) => `<span class="highlight-word">${text}</span>`,
  )
  const hast = unified()
    .use(parse, {emitParseErrors: true, fragment: true})
    .parse(result)
  return hast.children
}
