import {styled} from '../stitches.config'

export const Heading = styled('h1', {
  lineHeight: '$heading',
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
  },
})
