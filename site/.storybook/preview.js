import '@fontsource/newsreader/variable-full.css'
import '@fontsource/newsreader/variable.css'
import '@fontsource/source-code-pro'
import '@fontsource/source-code-pro/400-italic.css'
import '@fontsource/source-code-pro/600.css'
import {globalStyles} from '../src/stitches.config'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    globalStyles()
    return <Story />
  },
]
