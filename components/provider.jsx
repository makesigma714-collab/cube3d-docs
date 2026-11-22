'use client'
import { RootProvider } from 'fumadocs-ui/provider/next'
import SearchDialog from '@/components/search'

export function Provider({ children }) {
  return (
    <RootProvider search={{ SearchDialog }} theme={{ defaultTheme: 'dark' }}>
      {children}
    </RootProvider>
  )
}
