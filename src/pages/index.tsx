import {Badge, Heading, Stack, Text, VStack} from '@chakra-ui/react'
import Head from 'next/head'
import Container from '../components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Effective Open Source</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container spacing={12}>
        <header>
          <VStack>
            <Text alignSelf="center" fontSize="4xl">
              🌱
            </Text>
            <Heading as="h1" fontSize={{base: '2xl', md: '3xl'}}>
              effectiveopensource.dev
            </Heading>
            <Text textAlign="center">
              The future home of a digital garden for growing effective open
              source stewardship ideas.
            </Text>
          </VStack>
        </header>
        <main>
          <Stack spacing={3}>
            <Heading as="h2" fontSize={{base: 'lg', md: '2xl'}}>
              Content Thesis <Badge colorScheme="purple">Rough Draft</Badge>
            </Heading>
            <Stack>
              <Text>
                Hello, I'm Mark Chandler. I'm a software engineer and open
                source maintainer from Cincinnati, Ohio.
              </Text>
              <Text>
                I've always been passionate about open source development, which
                is the process of creating software through global, voluntary
                communities built around cooperation and knowledge-sharing. I
                care about open source stewardship because I've experienced the
                open source process from every direction—as a consumer, a
                contributor, and a maintainer—and I know first-hand how
                difficult it is to coordinate open source development in a way
                that produces effective software backed by a healthy, dynamic,
                and open community.
              </Text>
              <Text>
                Every week, I publish content on effectiveopensource.dev
                exploring topics related to effective open source stewardship,
                such as community-building, accessible documentation,
                contribution processes, and project planning and tooling.
              </Text>
              <Text>
                These articles are for open source maintainers who want to
                expand the possibilities of their projects and build vibrants
                communities to support them.
              </Text>
            </Stack>
          </Stack>
        </main>
      </Container>
    </>
  )
}
