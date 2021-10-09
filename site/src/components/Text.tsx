import {styled} from '../stitches.config'

export const Text = styled('p', {
  margin: '0',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    size: {
      xs: {fontSize: '$xs'},
      sm: {fontSize: '$sm'},
      md: {fontSize: '$md'},
      lg: {fontSize: '$lg'},
      xl: {fontSize: '$xl'},
      xxl: {fontSize: '$xxl'},
    },
    align: {
      left: {textAlign: 'left'},
      center: {textAlign: 'center'},
      right: {textAlign: 'right'},
      justify: {textAlign: 'justify'},
    },
    underline: {
      true: {textDecoration: 'underline'},
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
