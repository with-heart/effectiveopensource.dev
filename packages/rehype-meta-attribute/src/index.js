const visit = require('unist-util-visit')

const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

module.exports = function rehypeMetaAttribute(options = {}) {
  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    let match

    if (node.tagName !== 'code' || !node.data?.meta) return

    re.lastIndex = 0

    while ((match = re.exec(node.data.meta))) {
      node.properties[match[1]] = match[2] || match[3] || match[4] || ''
      parentNode.properties[match[1]] = match[2] || match[3] || match[4] || ''
    }
  }
}
