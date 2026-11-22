import { createElement } from 'react'
import { Box, SquareFunction, Zap, Hash } from 'lucide-react'
import { source } from './source'

const groupIcons = {
  Properties: Box,
  Methods: SquareFunction,
  Events: Zap,
}

const reference = ['/server/', '/client/', '/types/']

function plain(title) {
  if (typeof title === 'string') return title
  if (Array.isArray(title)) return title.map(plain).join('')
  if (title && title.props) return plain(title.props.children)
  return ''
}

function members(page, url) {
  const found = []
  let group = ''
  for (const item of page.data.toc) {
    if (item.depth === 2) group = plain(item.title)
    if (item.depth !== 3) continue
    const icon = groupIcons[group] ?? Hash
    found.push({
      type: 'page',
      name: plain(item.title),
      url: `${url}${item.url}`,
      icon: createElement(icon, { className: 'size-3.5' }),
    })
  }
  return found
}

function expand(nodes, pages) {
  return nodes.map((node) => {
    if (node.type === 'folder') {
      return { ...node, children: expand(node.children, pages) }
    }
    if (node.type !== 'page' || !reference.some((prefix) => node.url.startsWith(prefix))) {
      return node
    }
    const page = pages.get(node.url)
    const children = page ? members(page, node.url) : []
    if (children.length === 0) return node
    return {
      type: 'folder',
      $id: `members:${node.url}`,
      name: node.name,
      icon: node.icon,
      index: node,
      children,
    }
  })
}

export function docsTree() {
  const tree = source.getPageTree()
  const pages = new Map(source.getPages().map((page) => [page.url, page]))
  return { ...tree, children: expand(tree.children, pages) }
}
