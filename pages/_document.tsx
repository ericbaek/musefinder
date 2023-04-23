import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ko" className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jvaprt0m2p" />
    </Html>
  )
}

// DO NOT EDIT