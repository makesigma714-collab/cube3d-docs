import defaultMdxComponents from 'fumadocs-ui/mdx'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { BookOpen, Earth, LayoutPanelLeft, Monitor } from 'lucide-react'

export function getMDXComponents(components) {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    BookOpen,
    Earth,
    LayoutPanelLeft,
    Monitor,
    ...components,
  }
}

export const useMDXComponents = getMDXComponents
