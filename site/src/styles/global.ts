import {global} from './system'

export const globalStyles = global({
  html: {
    fontSize: '1.25rem',
    lineHeight: 1.5,
    textRendering: 'optimizeLegibility',
    '@sm': {fontSize: '1.5rem'},
  },
  body: {
    margin: 0,
    backgroundColor: '#fefdfa',
    color: '$gray900',
    position: 'relative',
    fontFamily: '$body',
    fontWeight: 300,
    minHeight: '100%',
  },
  '*, *::before, *::after': {
    position: 'relative',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  ':root': {
    MozTabSize: 4,
    tabSize: 4,
  },
  [`body,
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre`]: {
    margin: 0,
  },
  hr: {
    height: 0,
    color: 'inherit',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'pre, code, kbd, samp': {
    fontFamily: '$monospace',
    fontSize: '1em',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  table: {
    textIndent: 0,
    borderColor: 'inherit',
  },
  a: {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecoration: 'inherit',
  },
  'ul, ol': {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$heading',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  img: {
    borderStyle: 'none',
  },
  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },
})
