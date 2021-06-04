import rehypeHighlightCode from '@effectiveopensource/rehype-highlight-code'
import rehypeMetaAttribute from '@effectiveopensource/rehype-meta-attribute'
import {findRootSync} from '@manypkg/find-root'
import smartypants from '@silvenon/remark-smartypants'
import {bundleMDX} from 'mdx-bundler'
import path from 'path'

process.env.ESBUILD_BINARY_PATH = path.join(
  // point to root `node_modules` since this project uses yarn workspaces
  findRootSync(process.cwd()),
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
