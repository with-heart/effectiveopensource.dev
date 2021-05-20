import '@fontsource/newsreader/variable-full.css'
import '@fontsource/newsreader/variable.css'
import '@fontsource/source-code-pro'
import {AppProps} from 'next/app'
import {globalStyles} from '../styles'
import '../styles/night-owl.css'

export default function App({Component, pageProps}: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}
