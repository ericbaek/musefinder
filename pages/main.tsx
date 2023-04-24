import React from 'react';
import Back from '@/stories/Back';
import DragPill from '@/stories/DragPill';
import MapActivity from '@/modules/Activity/MapActivity';
import NaverScript from '@/modules/scripts/NaverScript';
import SearchActivity from '@/modules/Activity/SearchActivity';
import styles from '@/stories/DragActivity.module.css'

export default function Main() {
      
    return (
        <>
            <SearchActivity/>

            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <MapActivity/>
            </div>


            <Back/>
            <NaverScript/>
        </>
    );
}