import {extendTheme, theme as defaultTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '1.125rem',
      },
    },
  },
  fonts: {
    heading: `Inter, ${defaultTheme.fonts.heading}`,
    body: `Inter, ${defaultTheme.fonts.body}`,
  },
  components: {
    Badge: {
      baseStyle: {
        textTransform: 'none',
      },
    },
  },
})
