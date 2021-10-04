import {promises as fs} from 'fs'
import globby from 'globby'
import path from 'path'

const contentPath = 'src/pages'

export const getAllContent = async () => {
  const files = await globby(contentPath, {
    expandDirectories: {
      extensions: ['mdx'],
    },
  })

  return files.map((file) => {
    const filePath = path.relative(contentPath, file)
    const slug = filePath.replace('.mdx', '').split('/')
    return {
      slug,
    }
  })
}

export const getContentBySlug = async (slug: string[]) => {
  const filePath = path.join(contentPath, `${slug.join('/')}.mdx`)
  const fileContents = await fs.readFile(filePath, 'utf-8')
  return fileContents
}
