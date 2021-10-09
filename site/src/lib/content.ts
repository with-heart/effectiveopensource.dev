import {compareDesc} from 'date-fns'
import {parse} from 'date-fns/fp'
import {promises as fs} from 'fs'
import globby from 'globby'
import matter from 'gray-matter'
import {compose, get, overArgs, take} from 'lodash/fp'
import path from 'path'

const contentPath = 'src/pages'

const getContentFiles = async () => {
  return globby(contentPath, {
    expandDirectories: {
      extensions: ['mdx'],
    },
  })
}

/** Converts a file path string to a slug. */
const fileToSlug = (file: string) => {
  const relativePath = path.relative(contentPath, file)
  return relativePath.replace('.mdx', '').split('/')
}

/** Converts a slug to a file path. */
const slugToFile = (slug: string[]) => {
  const slugPath = `${slug.join('/')}.mdx`
  return path.resolve(contentPath, slugPath)
}

export const getAllContent = async () => {
  const files = await getContentFiles()
  return files.map((file) => {
    return {
      slug: fileToSlug(file),
    }
  })
}

export const getContentBySlug = async (slug: string[]) => {
  const file = slugToFile(slug)
  const fileContents = await fs.readFile(file, 'utf-8')
  return fileContents
}

export interface ContentMetadata {
  slug: string
  publishedOn: string
  title: string
  description: string
}

const getContentMetadata = async (file: string): Promise<ContentMetadata> => {
  const content = await fs.readFile(file, 'utf-8')
  const frontmatter = matter(content)
  const {publishedOn, description, title} = frontmatter.data ?? {}

  return {
    slug: fileToSlug(file).join('/'),
    publishedOn,
    title,
    description,
  }
}

/** Parses the file's `publishedOn` value to a date. */
const parsePublishedOn = compose(
  parse(new Date(), 'yyyy-MM-dd'),
  get('publishedOn'),
)

/** Compares `publishedOn` metadata to sort dates in descending order. */
export const compareDescByPublishedOnDate = overArgs(compareDesc, [
  parsePublishedOn,
  parsePublishedOn,
])

export interface GetLatestContentOptions {
  /**
   * The maximum pieces of content to retrieve.
   * @default 10
   */
  limit: number
}

/** Gets metadata for the latest posts. */
export const getLatestContent = async (
  {limit}: GetLatestContentOptions = {limit: 10},
) => {
  const files = await getContentFiles()

  // attach metadata to file and filter out any missing `publishedOn`
  const filesWithMetadata = await (
    await Promise.all(files.map(getContentMetadata))
  ).filter((file) => !!file.publishedOn)
  // sort the files in descending order by their `publishedOn` value
  filesWithMetadata.sort(compareDescByPublishedOnDate)

  // take the limit from the now-sorted files
  const latest = take(limit, filesWithMetadata)

  return latest
}
