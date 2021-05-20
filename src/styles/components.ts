import {styled} from './system'

export const Box = styled('div', {})

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    centered: {
      true: {},
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
  compoundVariants: [
    {
      centered: true,
      direction: 'row',
      css: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    {
      centered: true,
      direction: 'column',
      css: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  ],
  defaultVariants: {
    direction: 'row',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$xs',
})

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

export const Container = styled('div', {
  width: '100%',
  mx: 'auto',
  maxWidth: '60ch',
  position: 'static',
  variants: {
    accent: {
      true: {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: 2,
          backgroundColor: '$accentSolid',
        },
      },
    },
  },
})

export const Text = styled('p', {
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
})

export const Heading = styled('h1', {
  lineHeight: 1.15,
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

export const AccentClip = styled('div', {
  backgroundColor: '$accentSolid',
  color: 'transparent',
  variants: {
    clip: {
      text: {
        backgroundClip: 'text',
      },
    },
  },
  defaultVariants: {
    clip: 'text',
  },
})
