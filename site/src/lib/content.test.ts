import {compareDescByPublishedOnDate} from './content'

test('compareDescByPublishedOnDate', () => {
  const first = {publishedOn: '2020-01-01'}
  const middle = {publishedOn: '2021-01-01'}
  const last = {publishedOn: '2021-06-01'}
  const files = [first, middle, last]
  files.sort(compareDescByPublishedOnDate)
  expect(files).toEqual([last, middle, first])
})
