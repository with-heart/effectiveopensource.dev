import Head from 'next/head'
import Link from 'next/link'
import {ReactNode} from 'react'
import {Container, Heading, Lead, Prose, Stack} from '../styles'
import {AccentClip} from '../styles/components'

export const ContentLayout = ({
  frontmatter,
  children,
}: {
  children: ReactNode
  frontmatter: {
    title: string
    description: string
  }
}) => {
  const title = `${frontmatter.title} | Effective Open Source`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container accent css={{py: '$sm'}}>
        <Stack spacing="xxl">
          <header>
            <Link href="/">
              <a>
                <Heading as="h1" size="md">
                  <AccentClip as="span">🌱</AccentClip> Effective Open Source
                </Heading>
              </a>
            </Link>
          </header>
          <main>
            <Prose centered>
              <h1>{frontmatter.title}</h1>
              <Lead>{frontmatter.description}</Lead>
              {children}
            </Prose>
          </main>
        </Stack>
      </Container>
    </>
  )
}
