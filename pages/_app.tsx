import '@/stories/Import.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>뮤즈파인더</title>
      <meta name="description" content="오락실을 쉽고 빠르게 검색해보자!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon_512.png"></link>
    </Head>
    <Component {...pageProps} />
    </>
  )

}

// DO NOT EDIT (META)