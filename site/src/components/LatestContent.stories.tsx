import {LatestContent, LatestContentProps} from './LatestContent'

export default {
  title: 'Components/LatestContent',
  component: LatestContent,
}

export const Default = () => {
  const content: LatestContentProps['content'] = [
    {
      slug: 'post-1',
      title: 'Post 1',
      description: 'This is a post about something',
      publishedOn: '10-09-2021',
    },
    {
      slug: 'post-2',
      title: 'Post 2',
      description: 'This is another post about something',
      publishedOn: '06-12-2021',
    },
  ]

  return <LatestContent content={content} />
}
