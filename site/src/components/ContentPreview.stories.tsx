import {ContentPreview, ContentPreviewProps} from './ContentPreview'

export default {
  title: 'Components/ContentPreview',
  component: ContentPreview,
}

export const Default = () => {
  const article: ContentPreviewProps = {
    slug: 'post',
    title: 'Demo Post',
    description:
      'This is a preview post used for demonstration purposes in Storybook',
    publishedOn: '10-09-2021',
  }
  return <ContentPreview {...article} />
}
