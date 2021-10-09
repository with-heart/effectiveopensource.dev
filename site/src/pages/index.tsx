import {GetStaticProps} from 'next'
import Head from 'next/head'
import {Container} from '../components/Container'
import {Flex} from '../components/Flex'
import {Heading} from '../components/Heading'
import {LatestContent} from '../components/LatestContent'
import {Stack} from '../components/Stack'
import {Text} from '../components/Text'
import {ContentMetadata, getLatestContent} from '../lib/content'

interface IndexProps {
  latestContent: ContentMetadata[]
}

export default function Home({latestContent}: IndexProps) {
  return (
    <>
      <Head>
        <title>Effective Open Source</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container accent css={{py: '$xxl'}}>
        <Stack direction="vertical" spacing="lg" css={{mx: '$sm'}}>
          <header>
            <Stack direction="vertical" spacing="xs">
              <Heading size="xxl" align="center" css={{fontWeight: 300}}>
                Effective Open Source
              </Heading>
              <Text
                align="center"
                css={{
                  fontWeight: 300,
                  color: '$sage11',
                  fontFamily: '$heading',
                }}
              >
                A digital garden of open source thinking and ideas.
              </Text>
            </Stack>
          </header>
          <div>
            <Stack
              direction="horizontal"
              spacing="xs"
              css={{
                justifyContent: 'center',
                p: {
                  backgroundColor: '$accentSolid',
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
            >
              <Text>🌱</Text>
              <Text css={{fontSize: '1.25rem'}}>🌱</Text>
              <Text>🌱</Text>
            </Stack>
          </div>

          <Flex direction="column" gap="lg">
            <Heading as="h2" size="xl">
              Latest Content
            </Heading>
            <LatestContent content={latestContent} />
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const latestContent = await getLatestContent({limit: 10})
  return {
    props: {
      latestContent,
    },
  }
}
