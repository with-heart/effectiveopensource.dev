import {serialize} from 'next-mdx-remote/serialize'

export const markdownToHtml = (source: string) => serialize(source)
