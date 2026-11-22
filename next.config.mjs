import { createMDX } from 'fumadocs-mdx/next'
import { fileURLToPath } from 'node:url'

const withMDX = createMDX()

const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: fileURLToPath(new URL('.', import.meta.url)) },
}

export default withMDX(config)
