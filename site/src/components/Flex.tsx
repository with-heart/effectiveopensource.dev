import {styled} from '../stitches.config'

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
