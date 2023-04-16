import React from 'react';
import '@/stories/Import.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
/* import TabBar from '@/stories/TabBar'; */

export default function App({ Component, pageProps }: AppProps) {
  /* TabBar */
  /*
  const default_tabbaricon = ['', '', '', '', ''];
  const default_tabbartitle = ['홈', '커뮤니티', '컴퍼니', '액티브', '메뉴'];
  const default_tabbarlink = ['/', '/map', '/company', '/active/active', '/menu'];
  */

  return (
    <>
    <Head>
      <title>뮤즈파인더</title>
      <meta name="description" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.svg"/>
      <link rel="apple-touch-icon" href="/favicon_512.png"/>
    </Head>
      <div>
          {/*
          <TabBar Href={default_tabbarlink} Icon={default_tabbaricon} Title={default_tabbartitle}/>
          */}

          <div className='System'>
            <Component {...pageProps} />
          </div>
      </div>
    </>
  )

}

// DO NOT EDIT (META)