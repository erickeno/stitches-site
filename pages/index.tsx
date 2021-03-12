import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Card,
  Title,
  Flex,
  Heading,
  Subtitle,
  Container,
  Link,
  Subheading,
  Section,
  Separator,
  Grid,
  Text,
  Code,
  Paragraph,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { DemoButton } from '@components/DemoButton';
import { WallOfLove } from '@components/WallOfLove';
import { CodeBlock } from '@components/CodeBlock';
import { TwitterLogoIcon, GitHubLogoIcon } from '@modulz/radix-icons';

const demoCode1 = `const Button = styled('button', {
  // base styles

  variants: {
    color: {
      gray: {
        backgroundColor: 'gainsboro',
      },
      blue: {
        backgroundColor: 'dodgerblue',
      },
    },
    size: {
      md: {
        height: '25px',
      },
      lg: {
        height: '35px',
      }
    }
  },

  compoundVariants: [{
    color: 'blue',
    size: 'lg',
    css: {
      bcakgroundColor: 'purple',
    }
  },

  defaultVariants: {
    color: 'gray',
    size: 'md',
  }
});`;

const code1Highlights = {
  one: '4-21',
  two: '23-29',
  three: '31-34',
};

const demoCode2 = `const defaultTheme = createCss({
  theme: {
    fonts: {},
    space: {},
    sizes: {},
    fontSizes: {},
    radii: {},
    zIndices: {},
    colors: {
      gray100: 'hsl(0 0% 98.8%)',
      gray200: 'hsl(0 0% 96.0%)',
      gray300: 'hsl(0 0% 93.7%)',
      gray400: 'hsl(0 0% 92.0%)',

      slate100: 'hsl(206 20% 98.8%)',
      slate200: 'hsl(206 14% 96.0%)',
      slate300: 'hsl(206 13% 93.7%)',
      slate400: 'hsl(206 12% 92.0%)',

      panel: '$slate200',
    }
  }
});

const darkTheme = theme('dark-theme', {
  colors: {
    gray100: 'hsl(0 0% 9.6%)',
    gray200: 'hsl(0 0% 11.6%)',
    gray300: 'hsl(0 0% 13.9%)',
    gray400: 'hsl(0 0% 16.6%)',

    slate100: 'hsl(200 6% 9.6%)',
    slate200: 'hsl(201 6% 11.6%)',
    slate300: 'hsl(201 6% 13.9%)',
    slate400: 'hsl(202 6% 16.6%)',

    panel: '$slate200',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});`;

const code2Highlights = {
  one: '4-21',
  two: '23-29',
  three: '31-34',
};

export default function Home() {
  const [code1ActiveHighlight, setCode1ActiveHighlight] = React.useState('one');
  const [code2ActiveHighlight, setCode2ActiveHighlight] = React.useState('one');

  return (
    <Box>
      <TitleAndMetaTags title="Stitches" />

      <Header />

      <Section css={{ pt: 0 }}>
        <Container size="3">
          <Title
            css={{
              lineHeight: '67px !important',
              background: 'linear-gradient(to left top, $colors$violet800, $colors$blue800)',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundPosition: '100px 200px',
              // animation: `${animatedText} 200ms`,
              mb: '$2',
              when: {
                bp2: {
                  ta: 'center',
                  mb: '$2',
                },
              },
            }}
          >
            The modern styling library
          </Title>
          <Subtitle
            as="p"
            css={{
              when: {
                bp2: {
                  mx: 230,
                  ta: 'center',
                },
              },
            }}
          >
            Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
            developer experience.
          </Subtitle>

          <Flex css={{ jc: 'center', gap: '$3', my: '$8' }}>
            <NextLink href="/docs" passHref>
              <DemoButton as="a" color="violet" size="large" css={{ mr: '$1' }}>
                Documentation
              </DemoButton>
            </NextLink>

            <DemoButton
              as="a"
              href="https://github.com/modulz/stitches"
              appearance="ghost"
              size="large"
              css={{ ml: '$1' }}
            >
              GitHub
            </DemoButton>
          </Flex>
        </Container>

        <Container size="1" css={{ my: '$8' }}>
          <Flex
            css={{
              boxShadow: 'inset 0 0 0 1px $colors$gray400',
              borderRadius: '$pill',
              fontFamily: '$mono',
              fontSize: '$2',
              lineHeight: 1,
              ai: 'center',
              height: '$7',
              color: '$violet900',
              backgroundColor: '$gray100',
              px: '$4',
            }}
          >
            npm install{' '}
            <Box as="span" css={{ color: '$hiContrast' }}>
              &nbsp;@stitches/react
            </Box>
          </Flex>
        </Container>

        <Container size="3">
          <Grid
            css={{
              gap: '$7',
              gridTemplateColumns: '1fr',
              when: {
                bp2: {
                  gap: '$7',
                  gridTemplateColumns: '1fr 1fr 1fr',
                },
              },
            }}
          >
            <Box>
              <Subheading css={{ mb: '$2' }}>Performant</Subheading>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries. It's lightweight too,{' '}
                <Code>@stitches/react</Code> weighs in at ~8.0kb gzipped.
              </Text>
            </Box>
            <Box>
              <Subheading css={{ mb: '$2' }}>Feature-rich</Subheading>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
                Prefixing all tokens ensures an accurate TypeScript autocomplete experience.
                However, token prefixes are optional. They still work, but numeric scale tokens will
                autocomplete to numeric values.
              </Text>
            </Box>
            <Box>
              <Subheading css={{ mb: '$2' }}>Best-in-class DX</Subheading>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
                Token types are automatically mapped to CSS Properties for an improved developer
                experience.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="3">
          <Text size="8" css={{ fontWeight: 500, ta: 'center', mb: '$2', lineHeight: '40px' }}>
            Testimonials
          </Text>
          <Subtitle css={{ ta: 'center' }}>Sharing some love from the community &lt;3</Subtitle>
        </Container>
        <WallOfLove />
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, 1fr)' },
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)' },
              },
            }}
          >
            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Variants</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Design composable component APIs with variants
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card
                  as="button"
                  onClick={() => setCode1ActiveHighlight('one')}
                  variant={code1ActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Variants</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onClick={() => setCode1ActiveHighlight('two')}
                  variant={code1ActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Compound Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onClick={() => setCode1ActiveHighlight('three')}
                  variant={code1ActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Default Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeBlock
                language="jsx"
                variant="dark"
                mode="interactive"
                line={code1Highlights[code1ActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={demoCode1}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Theming</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Define multiple themes with CSS variables
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card
                  as="button"
                  onClick={() => setCode2ActiveHighlight('one')}
                  variant={code2ActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Tokens
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onClick={() => setCode2ActiveHighlight('two')}
                  variant={code2ActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Token aliases
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onClick={() => setCode2ActiveHighlight('three')}
                  variant={code2ActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Themes
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeBlock
                language="jsx"
                variant="dark"
                mode="interactive"
                line={code2Highlights[code2ActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={demoCode2}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Smart tokens</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Define multiple themes with CSS variables
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Token Aliases</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Themes</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeBlock
                language="jsx"
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                }}
                value={demoCode1}
                line="2-13"
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Utils</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Define custom properties using utils
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Token Aliases</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Themes</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeBlock
                language="jsx"
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                }}
                value={demoCode1}
                line="2-13"
              />
            </Box>
          </Grid>
        </Container>

        <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, 1fr)' },
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)' },
              },
            }}
          >
            <Box>
              <Heading>Conditions</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeBlock
                  language="jsx"
                  css={{
                    backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  }}
                  value={demoCode1}
                  line="2-13"
                />
              </Box>
            </Box>
            <Box>
              <Heading>Override styles</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeBlock
                  css={{
                    backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  }}
                  language="jsx"
                  value={demoCode1}
                  line="2-13"
                />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="2">
          <Text size="8" css={{ fontWeight: 500, ta: 'center' }}>
            Features
          </Text>
          <Subtitle as="p">A fully-featured styling library.</Subtitle>

          <Grid
            css={{
              gap: '$6',
              gridTemplateColumns: '1fr',
              when: {
                bp2: {
                  gap: '$7',
                  gridTemplateColumns: '1fr 1fr',
                },
              },
            }}
          >
            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Performant
              </Text>
              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries. Both <Code>@stitches/core</Code> and{' '}
                <Code>@stitches/react</Code> libraries combined weigh in at ~8.0kb gzipped.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Server-Side Rendering
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Stitches supports cross-browser server-side rendering, even for responsive styles
                and variants.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Developer experience
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                With a fully-typed API, token-aware properties, and custom utils, Stitches provides
                a fun and intuitive DX.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Critical Path CSS
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Stitches only injects the styles which are actually used, so your users don't
                download unnecessary CSS.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Polymorphic <Code>as</Code> prop
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Included in Components returned from the styled function
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Easy overrides
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Stitches provides a <Code>css</Code> prop, which allows style overrides to be
                applied in the consumption layer.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container size="3">
          <Text size="8" css={{ fontWeight: 500, ta: 'center' }}>
            Community
          </Text>
          <Subtitle as="p" css={{ ta: 'center' }}>
            A fully-featured styling library.
          </Subtitle>

          <Grid
            css={{
              gap: '$7',
              gridTemplateColumns: '1fr',
              when: {
                bp2: {
                  gap: '$7',
                  gridTemplateColumns: '1fr 1fr 1fr',
                },
              },
              mx: '-$4',
            }}
          >
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/stitchesjs"
                target="_blank"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Twitter
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
                  Follow along for all the latest updates.
                </Text>
              </Card>
            </Box>
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/stitchesjs"
                target="_blank"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07761 1.80608C5.03403 1.79923 4.98973 1.79818 4.94586 1.80296C4.10147 1.89492 2.81887 2.34979 2.06162 2.7605C2.00944 2.7888 1.96272 2.82617 1.92364 2.87085C1.60757 3.23223 1.32199 3.82069 1.09852 4.37438C0.868566 4.94411 0.678122 5.54455 0.569535 5.97869C0.216388 7.39061 0.0225233 9.08576 -0.00250283 10.6922C-0.00380683 10.7759 0.0159279 10.8586 0.0548912 10.9327C0.358561 11.5102 1.00888 12.0436 1.65781 12.4324C2.31435 12.8257 3.08127 13.1377 3.70193 13.1977C3.85765 13.2127 4.01144 13.154 4.11752 13.039C4.2733 12.8701 4.53643 12.4779 4.73419 12.1753C4.8395 12.0141 4.93692 11.8616 5.00792 11.7495C5.01277 11.7419 5.01749 11.7344 5.02209 11.7271C5.69448 11.8888 6.51526 12.0001 7.50002 12.0001C8.48373 12.0001 9.30381 11.889 9.97579 11.7276C9.98029 11.7347 9.98491 11.742 9.98964 11.7495C10.0606 11.8616 10.1581 12.0141 10.2634 12.1753C10.4611 12.4779 10.7243 12.8701 10.88 13.039C10.9861 13.154 11.1399 13.2127 11.2956 13.1977C11.9163 13.1377 12.6832 12.8257 13.3398 12.4324C13.9887 12.0436 14.639 11.5102 14.9427 10.9327C14.9816 10.8586 15.0014 10.7759 15.0001 10.6922C14.975 9.08576 14.7812 7.39061 14.428 5.97869C14.3194 5.54455 14.129 4.94411 13.899 4.37438C13.6756 3.82069 13.39 3.23223 13.0739 2.87085C13.0348 2.82617 12.9881 2.7888 12.9359 2.7605C12.1787 2.34979 10.8961 1.89492 10.0517 1.80296C10.0078 1.79818 9.96353 1.79923 9.91994 1.80608C9.70897 1.83923 9.5282 1.94775 9.39603 2.04759C9.25626 2.15318 9.12674 2.28293 9.01518 2.41385C8.85191 2.60546 8.69357 2.83966 8.59255 3.06167C8.25187 3.02276 7.88714 3 7.5 3C7.11199 3 6.74647 3.02286 6.40513 3.06193C6.30411 2.83985 6.14571 2.60553 5.98238 2.41385C5.87082 2.28293 5.7413 2.15318 5.60153 2.04759C5.46936 1.94775 5.28859 1.83923 5.07761 1.80608ZM10.9661 11.4207C11.0082 11.4862 11.0536 11.5564 11.1005 11.6283C11.2306 11.8274 11.3589 12.0178 11.4593 12.1584C11.8511 12.0682 12.3479 11.8609 12.8258 11.5746C13.3655 11.2512 13.791 10.881 13.9976 10.5682C13.9647 9.06491 13.779 7.50506 13.4579 6.22133C13.3609 5.83337 13.1849 5.27687 12.9717 4.74866C12.7717 4.25316 12.5596 3.83538 12.3749 3.59492C11.728 3.26047 10.7131 2.90749 10.0495 2.81068C10.0364 2.81863 10.0195 2.82985 9.9988 2.84551C9.93215 2.89586 9.85474 2.97041 9.77633 3.06243C9.72436 3.12342 9.67815 3.18461 9.63842 3.2425C10.006 3.32847 10.3305 3.42907 10.6084 3.5301C10.9749 3.66339 11.2607 3.7976 11.4578 3.90046C11.5565 3.95191 11.633 3.99558 11.6866 4.02748C11.7133 4.04343 11.7344 4.05645 11.7495 4.06603L11.7679 4.07776L11.7737 4.08158L11.7758 4.08296L11.7767 4.08351L11.777 4.08376C11.7772 4.08387 11.7773 4.08397 11.5147 4.47796L11.7774 4.08398C12.0071 4.23715 12.0692 4.54759 11.916 4.77735C11.7631 5.00667 11.4536 5.06896 11.224 4.9169L11.2236 4.91668L11.2232 4.9164L11.223 4.91624L11.2229 4.91622C11.2228 4.91612 11.2226 4.91602 11.5 4.5L11.2226 4.91602L11.2155 4.91151C11.2075 4.90644 11.1939 4.89797 11.1748 4.88658C11.1365 4.86379 11.0764 4.82934 10.9953 4.78704C10.8331 4.7024 10.5876 4.58661 10.2666 4.4699C9.62475 4.23649 8.68273 4 7.5 4C6.31727 4 5.37525 4.23649 4.73337 4.4699C4.4124 4.58661 4.16694 4.7024 4.00472 4.78704C3.92365 4.82934 3.8635 4.86379 3.82524 4.88658C3.80612 4.89797 3.79248 4.90644 3.78445 4.91151L3.77664 4.9165L3.77679 4.9164C3.77688 4.91634 3.77697 4.91628 3.77706 4.91622L3.77679 4.9164L3.77679 4.9164C3.54708 5.0691 3.23703 5.00693 3.08398 4.77735C2.9308 4.54759 2.99288 4.23715 3.22265 4.08398L3.5 4.5C3.22265 4.08398 3.22281 4.08387 3.22298 4.08376L3.22334 4.08351L3.22418 4.08296L3.22627 4.08158L3.23212 4.07776L3.25046 4.06603C3.26562 4.05645 3.28666 4.04343 3.31343 4.02748C3.36697 3.99558 3.44354 3.95191 3.54215 3.90046C3.73931 3.7976 4.0251 3.66339 4.39162 3.5301C4.66894 3.42926 4.99274 3.32886 5.35947 3.24299C5.31967 3.18496 5.27335 3.12359 5.22123 3.06243C5.14282 2.97041 5.06541 2.89586 4.99875 2.84551C4.97802 2.82985 4.96112 2.81863 4.94803 2.81068C4.28449 2.90749 3.26952 3.26047 2.62267 3.59492C2.43795 3.83538 2.22582 4.25316 2.02583 4.74866C1.81264 5.27687 1.63669 5.83337 1.53965 6.22133C1.21857 7.50506 1.03284 9.06491 0.99999 10.5682C1.20654 10.881 1.63205 11.2512 2.17176 11.5746C2.64965 11.8609 3.14642 12.0682 3.53828 12.1584C3.63866 12.0178 3.76696 11.8274 3.89705 11.6283C3.94418 11.5561 3.98976 11.4857 4.03201 11.4199C3.93683 11.3829 3.84649 11.3454 3.76089 11.3077C3.36048 11.1312 3.06623 10.9522 2.86724 10.8123C2.7678 10.7425 2.69228 10.6825 2.63928 10.6376C2.61278 10.6152 2.59191 10.5965 2.5765 10.5823C2.5688 10.5752 2.56246 10.5692 2.55746 10.5644L2.55097 10.5581L2.54847 10.5557L2.54741 10.5546L2.54692 10.5541C2.54669 10.5539 2.54647 10.5537 2.90002 10.2001L2.54647 10.5537C2.35121 10.3584 2.35121 10.0418 2.54647 9.84657C2.74071 9.65233 3.05498 9.65131 3.25048 9.8435L3.25435 9.84712C3.2596 9.85196 3.26989 9.86124 3.28538 9.87436C3.31636 9.90059 3.36819 9.94215 3.44218 9.99415C3.59007 10.0981 3.82706 10.244 4.16415 10.3926C4.83659 10.6889 5.91776 11.0001 7.50002 11.0001C9.08229 11.0001 10.1635 10.6889 10.8359 10.3926C11.173 10.244 11.41 10.0981 11.5579 9.99415C11.6319 9.94215 11.6837 9.90058 11.7147 9.87436C11.7302 9.86124 11.7405 9.85196 11.7457 9.84712L11.7496 9.84351C11.9451 9.65131 12.2593 9.65233 12.4536 9.84657C12.6488 10.0418 12.6488 10.3584 12.4536 10.5537L12.105 10.2051C12.4536 10.5537 12.4534 10.5539 12.4531 10.5541L12.4526 10.5546L12.4516 10.5557L12.4491 10.5581L12.4426 10.5644C12.4376 10.5692 12.4313 10.5752 12.4235 10.5823C12.4081 10.5965 12.3873 10.6152 12.3608 10.6376C12.3078 10.6825 12.2323 10.7425 12.1328 10.8123C11.9338 10.9522 11.6396 11.1312 11.2392 11.3077C11.153 11.3457 11.062 11.3835 10.9661 11.4207ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="15" height="15" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Discord
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
                  Stitches avoids unnecessary prop interpolations at runtime.
                </Text>
              </Card>
            </Box>
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/stitchesjs"
                target="_blank"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Github
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
                  Stitches avoids unnecessary prop interpolations at runtime.
                </Text>
              </Card>
            </Box>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
