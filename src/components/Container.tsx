import {Stack, StackProps} from '@chakra-ui/react'

export default function Container({spacing = 0, ...props}: StackProps) {
  return (
    <Stack
      w="full"
      py={12}
      mx="auto"
      maxW="60ch"
      px={{base: 2, md: 6}}
      spacing={spacing}
      {...props}
    />
  )
}
