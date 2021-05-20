import {styled, Text} from '../styles'

const Notice = styled('p', {
  fontSize: '$xs',
  color: '$lightText',
  textAlign: 'center',
})

export const DigitalGardenNotice = () => {
  return (
    <Notice>
      Learn more about digital gardens with{' '}
      <Text
        as="a"
        href="https://maggieappleton.com/garden-history"
        underline
        css={{color: '$accentSolid'}}
      >
        Maggie Appleton's "A Brief History & Ethos of the Digital Garden"
      </Text>
      .
    </Notice>
  )
}
