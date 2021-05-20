import smartypants from '@silvenon/remark-smartypants'
import {bundleMDX} from 'mdx-bundler'
import path from 'path'
import rehypeHighlightCode from '../../rehype/rehype-highlight-code'
import rehypeMetaAttribute from '../../rehype/rehype-meta-attribute'

process.env.ESBUILD_BINARY_PATH = path.join(
  process.cwd(),
  'node_modules',
  'esbuild',
  'bin',
  'esbuild',
)

export const compileMarkdown = async (source: string) => {
  return await bundleMDX(source, {
    xdmOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
      ]
      options.remarkPlugins = [...(options.remarkPlugins ?? []), smartypants]
      return options
    },
  })
}
