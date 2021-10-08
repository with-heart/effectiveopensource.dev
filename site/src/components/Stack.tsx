import {styled} from '../stitches.config'

export const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    justify: {
      center: {justifyContent: 'center'},
    },
    direction: {
      horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        '& > * + *': {
          marginLeft: '$$spacing',
        },
      },
      vertical: {
        flexDirection: 'column',
        '& > * + *': {
          marginTop: '$$spacing',
        },
      },
    },
    spacing: {
      none: {$$spacing: '$space$none'},
      xxs: {$$spacing: '$space$xxs'},
      xs: {$$spacing: '$space$xs'},
      sm: {$$spacing: '$space$sm'},
      md: {$$spacing: '$space$md'},
      lg: {$$spacing: '$space$lg'},
      xl: {$$spacing: '$space$xl'},
      xxl: {$$spacing: '$space$xxl'},
    },
  },
  defaultVariants: {
    direction: 'vertical',
    spacing: 'xs',
  },
})
