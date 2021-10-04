import {promises as fs} from 'fs'
import path from 'path'

const contentPath = 'src/pages'

export const getAllContent = async () => {
  const files = await fs.readdir(contentPath)
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  return mdxFiles.map((file) => {
    return {
      slug: file.replace('.mdx', ''),
    }
  })
}

export const getContentBySlug = async (slug: string) => {
  const filePath = path.join(contentPath, `${slug}.mdx`)
  const fileContents = await fs.readFile(filePath, 'utf-8')
  return fileContents
}
