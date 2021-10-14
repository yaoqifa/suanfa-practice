function getElementById(node, id) {
  if (!node) {
    return
  }
  if (node.id === id) {
    return node
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    const found = getElementById(node.childNodes[i], id)
    if (found) {
      return found
    }
  }
  return null
}

// 非递归

function getElementById2(node, id) {
  while (node) {
    if (node.id === id) {
      return node
    }
    node = nextElement(node)
  }
  return null
}

function nextElement(node) {
  if (node.children.length) {
    return node.children[0]
  }
  if (node.nextSibling) {
    return node.nextSibling
  }
  while (node.parentNode) {
    if (node.parentNode.nextSibling) {
      return node.parentNode.nextSibling
    }
    node = node.parentNode
  }
  return null
}