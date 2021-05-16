import Head from 'next/head'
import {ReactNode} from 'react'
import {Container, Heading, Lead, Prose, Stack} from '../styles'
import {AccentClip} from '../styles/components'

export const ContentLayout = ({
  meta,
  children,
}: {
  children: ReactNode
  meta: {
    title: string
    description: string
  }
}) => {
  const title = `${meta.title} | Effective Open Source`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container accent css={{py: '$sm'}}>
        <Stack spacing="xxl">
          <header>
            <Heading as="h1" size="md">
              <AccentClip as="span">🌱</AccentClip> Effective Open Source
            </Heading>
          </header>
          <main>
            <Prose centered>
              <h1>{meta.title}</h1>
              <Lead>{meta.description}</Lead>
              {children}
            </Prose>
          </main>
        </Stack>
      </Container>
    </>
  )
}
