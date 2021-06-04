import {Stack, styled} from '../styles'

const SeedlingText = styled('p', {
  backgroundColor: '$accentSolid',
  backgroundClip: 'text',
  color: 'transparent',
})

const SeedlingsContainer = styled(Stack, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      sm: {
        $$spacing: '$space$xxs',
        [`${SeedlingText}`]: {
          fontSize: '$xs',
          '&:nth-of-type(2)': {fontSize: '$sm'},
        },
      },
      lg: {
        $$spacing: '$space$sm',
        [`${SeedlingText}`]: {
          fontSize: '$md',
          '&:nth-of-type(2)': {fontSize: '1.25rem'},
        },
      },
    },
  },
})

const Seedling = () => {
  return <SeedlingText>🌱</SeedlingText>
}

interface SeedlingsProps {
  size: 'sm' | 'lg'
}

export const Seedlings = ({size}: SeedlingsProps) => {
  return (
    <div>
      <SeedlingsContainer direction="horizontal" size={size}>
        <Seedling />
        <Seedling />
        <Seedling />
      </SeedlingsContainer>
    </div>
  )
}
