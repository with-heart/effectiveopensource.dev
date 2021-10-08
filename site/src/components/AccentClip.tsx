import {styled} from '../stitches.config'

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
