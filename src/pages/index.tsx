import {Container, Flex, Heading, Stack, Text, VStack} from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Effective Open Source</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" minH="100vh" align="center" justify="center">
        <Stack spacing={12}>
          <VStack>
            <Text>🌱</Text>
            <Heading as="h1">effectiveopensource.dev</Heading>
            <Text textAlign="center">
              The future home of a digital garden for growing effective open
              source stewardship ideas.
            </Text>
          </VStack>
          <Stack spacing={3}>
            <Heading as="h2" fontSize="2xl">
              Content Thesis (Rough Draft)
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
        </Stack>
      </Flex>
    </Container>
  )
}
