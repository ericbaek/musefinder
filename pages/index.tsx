import React, { Component } from 'react';
import styles from '@/stories/DragActivity.module.css'
import SearchActivity from '@/modules/Activity/SearchActivity';
import NaverScript from '@/modules/scripts/NaverScript';
import DragPill from '@/stories/DragPill';
import InterfaceIcon from '@/stories/InterfaceIcon';
import MapActivity from '@/modules/Activity/MapActivity';
import { useRouter } from 'next/router';
import ActiveActivity from '@/modules/Activity/ActiveActivity';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <SearchActivity/>
      
      <div className={styles.DragActivity}>
        <div className={styles.Drag}> {/* 드래그 */}
            <DragPill/>
        </div>
        <div className={styles.GroupMap}>
            {router.pathname === `/arcades/[arcadeID]` ? (
              <ActiveActivity />
            ) : (
              <MapActivity />
            )}
        </div>
      </div>
      <InterfaceIcon Icon=''/>

      <NaverScript/>
    </>
  );
}
