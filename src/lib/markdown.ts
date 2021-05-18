import {bundleMDX} from 'mdx-bundler'

export const compileMarkdown = async (source: string) => await bundleMDX(source)
