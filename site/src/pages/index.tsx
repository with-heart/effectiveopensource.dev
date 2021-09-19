import Head from 'next/head'
import {Container, Heading, Prose, Stack, Text} from '../styles'

export default function Home() {
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
              <Heading
                size="xxl"
                align="center"
                css={{
                  fontWeight: 300,
                  color: '$gray900',
                }}
              >
                Effective Open Source
              </Heading>
              <Text
                align="center"
                css={{
                  fontWeight: 300,
                  color: '$gray800',
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
          <Prose as="article" color="pink">
            <h1>Content Thesis</h1>
            <Text>
              Hello, I'm Mark Chandler. I'm a software engineer and open source
              maintainer from Cincinnati, Ohio.
            </Text>
            <Text>
              I've always been passionate about open source development, which
              is the process of creating software through global, voluntary
              communities built around cooperation and knowledge-sharing. I care
              about open source stewardship because I've experienced the open
              source process from every direction—as a consumer, a contributor,
              and a maintainer—and I know first-hand how difficult it is to
              coordinate open source development in a way that produces
              effective software backed by a healthy, dynamic, and open
              community.
            </Text>
            <Text>
              Every week, I publish content on effectiveopensource.dev exploring
              topics related to effective open source stewardship, such as
              community-building, accessible documentation, contribution
              processes, and project planning and tooling.
            </Text>
            <Text>
              These articles are for open source maintainers who want to expand
              the possibilities of their projects and build vibrants communities
              to support them.
            </Text>
          </Prose>
        </Stack>
      </Container>
    </>
  )
}
