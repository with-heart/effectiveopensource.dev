import nodeToString from 'hast-util-to-string'
import rangeParser from 'parse-numeric-range'
import {refractor} from 'refractor'
import markdown from 'refractor/lang/markdown'
import jsx from 'refractor/lang/jsx'
import {Plugin} from 'unified'
import {visit, Visitor} from 'unist-util-visit'
import highlightLine from './rehype-highlight-line'
import highlightWord from './rehype-highlight-word'

refractor.register(jsx)
refractor.register(markdown)

const rehypeHighlightCode = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (parentNode.tagName !== 'pre' && node.tagName !== 'code') return

    const lang = node.properties.className
      ? node.properties.className[0].split('-')[1]
      : 'md'
    let result = refractor.highlight(nodeToString(node), lang)

    const linesToHighlight = rangeParser(node.properties.line || '0')
    result = highlightLine(result, linesToHighlight)

    result = highlightWord(result)

    node.children = result
  }
}

export default rehypeHighlightCode
