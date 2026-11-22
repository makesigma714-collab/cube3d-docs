import defaultMdxComponents from 'fumadocs-ui/mdx'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { BookOpen, Earth, LayoutPanelLeft, Monitor, Play, Timer } from 'lucide-react'

export function getMDXComponents(components) {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    BookOpen,
    Earth,
    LayoutPanelLeft,
    Monitor,
    Play,
    Timer,
    ...components,
  }
}

export const useMDXComponents = getMDXComponents
