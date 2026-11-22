import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import { baseOptions } from '@/lib/layout.shared'
import { docsTree } from '@/lib/tree'

export default function Layout({ children }) {
  const options = baseOptions()
  return (
    <DocsLayout tree={docsTree()} {...options} tabMode="navbar" nav={{ ...options.nav, mode: 'top' }}>
      {children}
    </DocsLayout>
  )
}
