import type * as Stitches from '@stitches/react'
import {createStitches} from '@stitches/react'
import {
  blue,
  emerald,
  gray,
  green,
  indigo,
  paletteToScaledColors,
  pink,
  red,
  violet,
} from './color-palettes'

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
      body: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
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
      ...paletteToScaledColors(gray, 'gray'),
      ...paletteToScaledColors(violet, 'violet'),
      ...paletteToScaledColors(blue, 'blue'),
      ...paletteToScaledColors(indigo, 'indigo'),
      ...paletteToScaledColors(emerald, 'emerald'),
      ...paletteToScaledColors(green, 'green'),
      ...paletteToScaledColors(pink, 'pink'),
      ...paletteToScaledColors(red, 'red'),
      white: 'rgba(255, 255, 255, 1)',
      accentLight: '$gray200',
      accentSolid: '$gray900',
      accentText: '$gray900',
      headingText: '$gray900',
      text: '$gray700',
      lightText: '$gray500',
      preText: '$accentLight',
      preBg: '$gray800',
      codeText: '$accentText',
      listBulletText: '$lightText',
      listBulletSolid: '$gray300',
    },
    fontWeights: {
      lightest: 200,
      light: 300,
      medium: 400,
      heavy: 500,
      heaviest: 600,
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
