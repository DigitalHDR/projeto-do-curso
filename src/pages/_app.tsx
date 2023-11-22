import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'

const roboto = Roboto({ //pertence ao tipo de fonte do site
  weight: '400',
  subsets: ['latin'],
})

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
