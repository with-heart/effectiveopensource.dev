import {styled} from './system'

export const Pre = styled('pre', {
  $$background: '$colors$gray900',
  $$text: '$colors$white',
  $$lineNumbers: '$colors$gray400',
  $$fadedLine: '$colors$gray400',

  overflow: 'auto',
  fontFamily: '$monospace',
  whiteSpace: 'pre',
  backgroundColor: '$$background',
  color: '$$text',

  '& > code': {display: 'block'},

  '.token.atrule': {color: '$$tokenAtRule'},
  '.token.attr-name': {color: '$$tokenAttrName'},
  '.token.attr-value': {color: '$$tokenAttrValue'},
  '.token.boolean': {color: '$$tokenBoolean'},
  '.token.builtin': {color: '$$tokenBuiltin'},
  '.token.cdata': {color: '$$tokenCdata'},
  '.token.char': {color: '$$tokenChar'},
  '.token.class-name': {color: '$$tokenClassName'},
  '.token.comment': {color: '$$tokenComment'},
  '.token.constant': {color: '$$tokenConstant'},
  '.token.deleted': {color: '$$tokenDeleted'},
  '.token.doctype': {color: '$$tokenDoctype'},
  '.token.entity': {color: '$$tokenEntity'},
  '.token.function': {color: '$$tokenFunction'},
  '.token.important': {color: '$$tokenImportant'},
  '.token.inserted': {color: '$$tokenInserted'},
  '.token.keyword': {color: '$$tokenKeyword'},
  '.token.number': {color: '$$tokenNumber'},
  '.token.operator': {color: '$$tokenOperator'},
  '.token.prolog': {color: '$$tokenProlog'},
  '.token.property': {color: '$$tokenProperty'},
  '.token.punctuation': {color: '$$tokenPunctuation'},
  '.token.regex': {color: '$$tokenRegex'},
  '.token.selector': {color: '$$tokenSelector'},
  '.token.string': {color: '$$tokenString'},
  '.token.symbol': {color: '$$tokenSymbol'},
  '.token.tag': {color: '$$tokenTag'},
  '.token.url': {color: '$$tokenUrl'},
  '.token.variable': {color: '$$tokenVariable'},

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$md',
    mx: '-$md',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$tokenDeleted',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$tokenInserted',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  '.highlight-line[data-highlighted="false"]': {
    '&, & *': {
      color: '$$fadedLine',
    },
  },

  '.highlight-word': {
    fontWeight: '$heaviest',
    color: '$$text',
    backgroundColor: '$$highlightWord',
  },

  '.language-md': {
    '.token.bold .token.content': {
      fontWeight: '$heaviest',
    },
    '.token.italic .token.content': {
      fontStyle: 'italic',
    },
  },

  variants: {
    showLineNumbers: {
      true: {
        '.highlight-line': {
          position: 'relative',
          paddingLeft: '$md',

          '&::before': {
            content: 'attr(data-line)',
            position: 'absolute',
            left: -5,
            top: 0,
            color: '$$lineNumbers',
          },
        },
      },
    },

    theme: {
      nightOwl: {
        $$text: '#d6deeb',
        $$background: '#011627',
        $$selection: 'rgba(29, 59, 83, 0.99)',
        $$highlightWord: 'rgba(199, 146, 234, 0.7)',

        $$namespace: 'rgb(199, 146, 234)',

        $$tokenAtRule: 'rgb(255,203,139)',
        $$tokenAttrName: 'rgb(173, 219, 103)',
        $$tokenAttrValue: 'rgb(255,203,139)',
        $$tokenBoolean: 'rgb(255, 88, 116)',
        $$tokenBuiltin: 'rgb(130, 170, 255)',
        $$tokenCdata: 'rgb(99, 119, 119)',
        $$tokenChar: 'rgb(130, 170, 255)',
        $$tokenClassName: 'rgb(255,203,139)',
        $$tokenComment: 'rgb(99, 119, 119)',
        $$tokenConstant: 'rgb(130, 170, 255)',
        $$tokenDeleted: 'rgba(245, 90, 87)',
        $$tokenDoctype: 'rgb(199, 146, 234)',
        $$tokenEntity: 'rgb(173, 219, 103)',
        $$tokenFunction: 'rgb(130, 170, 255)',
        $$tokenImportant: 'rgb(214, 222, 235)',
        $$tokenInserted: 'rgb(173, 219, 103)',
        $$tokenKeyword: 'rgb(127, 219, 202)',
        $$tokenNumber: 'rgb(247, 140, 108)',
        $$tokenOperator: 'rgb(127, 219, 202)',
        $$tokenProlog: 'rgb(99, 119, 119)',
        $$tokenProperty: 'rgb(128, 203, 196)',
        $$tokenPunctuation: 'rgb(199, 146, 234)',
        $$tokenRegex: 'rgb(214, 222, 235)',
        $$tokenSelector: 'rgb(199, 146, 234)',
        $$tokenString: 'rgb(173, 219, 103)',
        $$tokenSymbol: 'rgb(128, 203, 196)',
        $$tokenTag: 'rgb(127, 219, 202)',
        $$tokenUrl: 'rgb(173, 219, 103)',
        $$tokenVariable: 'rgb(214, 222, 235)',

        '.language-md': {
          '.token.content': {
            color: '$$text',
          },
        },
      },
    },
  },

  defaultVariants: {
    theme: 'nightOwl',
  },
})
