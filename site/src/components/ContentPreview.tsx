import Link from 'next/link'
import {ContentMetadata} from '../lib/content'
import {Flex} from './Flex'
import {Heading} from './Heading'
import {Text} from './Text'

export interface ContentPreviewProps extends ContentMetadata {}

export const ContentPreview = ({
  description,
  publishedOn,
  slug,
  title,
}: ContentPreviewProps) => {
  return (
    <Link href={`/${slug}`} passHref>
      <Flex as="a" direction="column" gap="xxs">
        <Heading size="lg">{title}</Heading>
        <Text as="time" size="xs">
          {publishedOn}
        </Text>
        <Text size="sm">{description}</Text>
      </Flex>
    </Link>
  )
}
