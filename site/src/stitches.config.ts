import {sage} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import {createStitches} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    fonts: {
      heading: 'NewsreaderVariable, Newsreader, serif',
      body:
        "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      monospace:
        'Source Code Pro, ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
    },
    space: {
      auto: 'auto',
      none: '0rem',
      xxs: '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2.25rem',
      xxl: '3rem',
    },
    colors: {
      ...sage,
      bg: '$sage1',
      white: 'rgba(255, 255, 255, 1)',
      accentLight: '$sage9',
      accentSolid: '$sage11',
      accentText: '$sage12',
      headingText: '$sage12',
      text: '$sage12',
      lightText: '$sage11',
      preText: '$sage3',
      preBg: '$sage12',
      codeText: '$accentText',
      listBulletText: '$lightText',
      listBulletSolid: '$sage11',
    },
    fontWeights: {
      body: 300,
      heading: 600,
      bold: 500,
      bullet: 400,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    shadows: {
      small: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      medium:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      large:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    m: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

export const globalStyles = globalCss({
  html: {
    fontSize: '1.25rem',
    lineHeight: '$body',
    textRendering: 'optimizeLegibility',
    '@sm': {fontSize: '1.5rem'},
  },
  body: {
    margin: 0,
    backgroundColor: '$bg',
    color: '$sage12',
    position: 'relative',
    fontFamily: '$body',
    fontWeight: 300,
    minHeight: '100%',
  },
  '*, *::before, *::after': {
    position: 'relative',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  ':root': {
    MozTabSize: 4,
    tabSize: 4,
  },
  [`body,
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre`]: {
    margin: 0,
  },
  hr: {
    height: 0,
    color: 'inherit',
  },
  'b, strong': {
    fontWeight: '$bold',
  },
  'pre, code, kbd, samp': {
    fontFamily: '$monospace',
    fontSize: '1em',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  table: {
    textIndent: 0,
    borderColor: 'inherit',
  },
  a: {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecoration: 'inherit',
  },
  'ul, ol': {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$heading',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  img: {
    borderStyle: 'none',
  },
  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },
})
