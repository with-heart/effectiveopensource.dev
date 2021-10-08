import {styled} from '../stitches.config'

export const Container = styled('div', {
  width: '100%',
  mx: '$auto',
  maxWidth: '50ch',
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
