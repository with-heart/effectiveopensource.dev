import {styled} from './system'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`
const em = (px: number, base: number) => `${round(px / base)}em`

export const Lead = styled('p', {
  color: '$gray600',
  fontSize: em(20, 16),
  lineHeight: round(32 / 20),
  marginTop: em(24, 20),
  marginBottom: em(24, 20),
})

export const Prose = styled('article', {
  $$listCounterStyle: 'decimal',
  color: '$text',
  maxWidth: '60ch',
  fontSize: rem(16),
  lineHeight: round(28 / 16),
  variants: {
    centered: {
      true: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },

  defaultVariants: {
    centered: true,
  },

  /** text */
  p: {
    my: em(20, 16),
  },
  h1: {
    color: '$headingText',
    fontWeight: '$heaviest',
    fontSize: em(36, 16),
    mt: 0,
    mb: em(32, 36),
    lineHeight: round(40 / 36),
  },
  h2: {
    color: '$headingText',
    fontWeight: '$heavy',
    fontSize: em(24, 16),
    mt: em(48, 24),
    mb: em(24, 24),
    lineHeight: round(32 / 24),
  },
  h3: {
    color: '$headingText',
    fontWeight: '$medium',
    fontSize: em(20, 16),
    mt: em(32, 20),
    mb: em(12, 20),
    lineHeight: round(32 / 20),
  },
  h4: {
    color: '$headingText',
    fontWeight: '$medium',
    mt: em(24, 16),
    mb: em(8, 16),
    lineHeight: round(24 / 16),
  },

  /** elements */
  a: {
    color: '$accentText',
    textDecoration: 'underline',
    fontWeight: 500,
  },
  strong: {
    color: '$accentText',
    fontWeight: 600,
  },
  hr: {
    borderColor: '$accentLight',
    borderTopWidth: 1,
    marginTop: em(48, 16),
    marginBottom: em(48, 16),
  },
  blockquote: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: '$accentText',
    borderLeftWidth: '0.25rem',
    borderLeftColor: '$accentLight',
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
    my: em(32, 20),
    pl: em(20, 20),
    '& p:first-of-type::before': {
      content: 'open-quote',
    },
    '& p:last-of-type::after': {
      content: 'close-quote',
    },
  },
  'img, video, figure': {
    marginTop: em(32, 16),
    marginBottom: em(32, 16),
  },
  'figure > *': {
    marginTop: 0,
    marginBottom: 0,
  },
  'figure figcaption': {
    color: '$lightText',
  },

  /** code */
  code: {
    color: '$accentText',
    fontWeight: 600,
    fontSize: em(14, 16),
    '&::before': {
      content: '"`"',
    },
    '&::after': {
      content: '"`"',
    },
  },
  'a code': {
    color: '$accentText',
  },
  pre: {
    color: '$preText',
    backgroundColor: '$preBg',
    overflowX: 'auto',
    fontSize: em(14, 16),
    lineHeight: round(24 / 14),
    marginTop: em(24, 14),
    marginBottom: em(24, 14),
    borderRadius: rem(6),
    paddingTop: em(12, 14),
    paddingRight: em(16, 14),
    paddingBottom: em(12, 14),
    paddingLeft: em(16, 14),
  },
  'pre code': {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
    fontWeight: 400,
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: 'none',
    },
  },
  'h2 code': {
    fontSize: em(21, 24),
  },
  'h3 code': {
    fontSize: em(18, 20),
  },

  /** lists */
  ol: {
    my: em(20, 16),
  },
  ul: {
    my: em(20, 16),
  },
  li: {
    my: em(8, 16),
  },
  'ol > li': {
    position: 'relative',
    pl: em(20, 16),
    '&::before': {
      content: 'counter(list-item, var(--listCounterStyle, decimal)) "."',
      position: 'absolute',
      left: 0,
      fontWeight: 400,
      color: '$listBulletText',
    },
  },
  'ul > li': {
    position: 'relative',
    pl: em(28, 16),
    '&::before': {
      content: '""',
      position: 'absolute',
      width: em(6, 16),
      height: em(6, 16),
      top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
      left: em(4, 16),
      backgroundColor: '$listBulletSolid',
      borderRadius: '50%',
    },
  },
  '> ul > li': {
    p: {
      my: em(12, 16),
    },
    '*:first-child': {
      mt: em(20, 16),
    },
    '*:last-child': {
      mb: em(20, 16),
    },
  },
  '> ol > li': {
    '> *:first-child': {
      marginTop: em(20, 16),
    },
    '> *:last-child': {
      marginBottom: em(20, 16),
    },
  },
  'ul ul, ul ol, ol ul, ol ol': {
    marginTop: em(12, 16),
    marginBottom: em(12, 16),
  },
  'ol[type="A"]': {
    $$listCounterStyle: 'upper-alpha',
  },
  'ol[type="a"]': {
    $$listCounterStyle: 'lower-alpha',
  },
  'ol[type="A" s]': {
    $$listCounterStyle: 'upper-alpha',
  },
  'ol[type="a" s]': {
    $$listCounterStyle: 'lower-alpha',
  },
  'ol[type="I"]': {
    $$listCounterStyle: 'upper-roman',
  },
  'ol[type="i"]': {
    $$listCounterStyle: 'lower-roman',
  },
  'ol[type="I" s]': {
    $$listCounterStyle: 'upper-roman',
  },
  'ol[type="i" s]': {
    $$listCounterStyle: 'lower-roman',
  },
  'ol[type="1"]': {
    $$listCounterStyle: 'decimal',
  },

  /** misc */
  '> :first-child': {
    marginTop: 0,
  },
  '> :last-child': {
    marginBottom: 0,
  },

  /** table */
  table: {
    fontSize: em(14, 16),
    lineHeight: round(24 / 14),
  },
  'thead th': {
    paddingRight: em(4, 14),
    paddingBottom: em(4, 14),
    paddingLeft: em(4, 14),
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  'tbody td': {
    paddingTop: em(8, 14),
    paddingRight: em(8, 14),
    paddingBottom: em(8, 14),
    paddingLeft: em(8, 14),
  },
})
