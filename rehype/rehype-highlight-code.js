const toText = require('hast-util-to-text')
const refractor = require('refractor')
const diff = require('refractor/lang/diff')
const json = require('refractor/lang/json')
const jsx = require('refractor/lang/jsx')
const markdown = require('refractor/lang/markdown')
const typescript = require('refractor/lang/typescript')
const rangeParser = require('parse-numeric-range')
const visit = require('unist-util-visit')
const highlightLine = require('./rehype-highlight-line')
const highlightWord = require('./rehype-highlight-word')

refractor.register(diff)
refractor.register(json)
refractor.register(jsx)
refractor.register(markdown)
refractor.register(typescript)

const rehypeHighlightCode = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (parentNode.tagName !== 'pre' || node.tagName !== 'code') {
      return
    }

    const lang = node.properties.className
      ? node.properties.className[0].split('-')[1]
      : 'md'
    let result = refractor.highlight(toText(node), lang)

    const linesToHighlight = rangeParser(node.properties.line || '0')
    result = highlightLine(result, linesToHighlight)

    result = highlightWord(result)

    node.children = result
  }
}

module.exports = rehypeHighlightCode
