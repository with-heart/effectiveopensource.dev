import {visit} from 'unist-util-visit'

const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

export default function rehypeMetaAttribute(options = {}) {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (node.tagName !== 'code' || !node.data || !node.data.meta) return

    let match
    re.lastIndex = 0

    while ((match = re.exec(node.data.meta))) {
      node.properties[match[1]] = match[2] || match[3] || match[4] || ''
      parentNode.properties[match[1]] = match[2] || match[3] || match[4] || ''
    }
  }
}
