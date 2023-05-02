import React from 'react';
import '@/stories/Import.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import SearchActivity from '@/modules/Activity/SearchActivity';
import NaverScript from '@/modules/scripts/NaverScript';
import DragPill from '@/stories/DragPill';
import InterfaceIcon from '@/stories/InterfaceIcon';
import styles from '@/stories/DragActivity.module.css'
import Link from 'next/link';
/* import Theme from '@/stories/Theme'; */
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
      {/*
      <TabBar Href={default_tabbarlink} Icon={default_tabbaricon} Title={default_tabbartitle}/>
      <Theme/>
      */}
      <div className='System'>
        
        <SearchActivity/>
    
        <div className={styles.DragActivity}>
          <div className={styles.Drag}> {/* 드래그 */}
            <DragPill/>
          </div>
          <div className={styles.GroupMap}>
            <Component {...pageProps} />
          </div>
        </div>

        <NaverScript/>


      </div>
    </>
  )

}

// DO NOT EDIT (META)