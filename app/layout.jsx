import { Inter } from 'next/font/google'
import { Provider } from '@/components/provider'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: { default: 'Cube3D Docs', template: '%s | Cube3D Docs' },
  description: 'Build worlds in Cube3D Studio and script them in Lua.',
  icons: { icon: '/logo.svg' },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
