import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '1.125rem',
      },
    },
  },
  components: {
    Badge: {
      baseStyle: {
        textTransform: 'none',
      },
    },
  },
})
