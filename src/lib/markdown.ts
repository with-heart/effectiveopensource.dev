import {bundleMDX} from 'mdx-bundler'
import rehypeHighlightCode from '../../rehype/rehype-highlight-code'
import rehypeMetaAttribute from '../../rehype/rehype-meta-attribute'

export const compileMarkdown = async (source: string) =>
  await bundleMDX(source, {
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
      ]
      return options
    },
  })
