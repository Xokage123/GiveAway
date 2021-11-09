// Layout
import { BaseLayout } from '../layouts/BaseLayout'
// Styles
import '../styles/global.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <BaseLayout><Component {...pageProps} /></BaseLayout>
}

export default MyApp
