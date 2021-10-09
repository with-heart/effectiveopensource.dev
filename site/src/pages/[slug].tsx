import {getMDXComponent} from 'mdx-bundler/client'
import {GetStaticPaths, GetStaticPropsContext} from 'next'
import {useMemo} from 'react'
import {Pre} from '../components/Pre'
import {ContentLayout} from '../layout/ContentLayout'
import {getAllContent, getContentBySlug} from '../lib/content'
import {compileMarkdown} from '../lib/markdown'

interface StaticProps {
  code: string
  frontmatter: {
    title: string
    description: string
    [key: string]: any
  }
}

interface Props extends StaticProps {}

export default function ContentPage({code, frontmatter}: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <ContentLayout frontmatter={frontmatter}>
      <Component
        components={{
          pre: Pre,
        }}
      />
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
  const content = await getContentBySlug(slug)
  const {code, frontmatter} = await compileMarkdown(content)

  return {props: {code, frontmatter}}
}
