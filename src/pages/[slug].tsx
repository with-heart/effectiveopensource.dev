import {GetStaticPaths, GetStaticPropsContext} from 'next'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {ContentLayout} from '../layout/ContentLayout'
import {getAllContent, getContentBySlug} from '../lib/content'
import {markdownToHtml} from '../lib/markdown'

interface StaticProps {
  content: MDXRemoteSerializeResult
  meta: {
    title: string
    description: string
    [key: string]: any
  }
}

interface Props extends StaticProps {}

export default function ContentPage({content, meta}: Props) {
  return (
    <ContentLayout meta={meta}>
      <MDXRemote {...content} />
    </ContentLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const content = await getAllContent()

  return {
    paths: content.map(({slug}) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug as string
  const doc = await getContentBySlug(slug)
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      ...doc,
      content,
    },
  }
}