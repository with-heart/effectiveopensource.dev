import {ContentMetadata} from '../lib/content'
import {ContentPreview} from './ContentPreview'
import {Flex} from './Flex'

export interface LatestContentProps {
  content: ContentMetadata[]
}

export const LatestContent = ({content}: LatestContentProps) => {
  if (!content.length) {
    return null
  }

  return (
    <Flex direction="column" gap="md">
      {content.map(({slug, publishedOn, title, description}) => (
        <ContentPreview
          key={slug}
          description={description}
          publishedOn={publishedOn}
          slug={slug}
          title={title}
        />
      ))}
    </Flex>
  )
}
