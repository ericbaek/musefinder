import { useRef, useEffect, useState } from 'react';
import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import SearchActivity from '@/modules/Activity/SearchActivity';
import Script from 'next/script';

import NaverScript from '@/modules/scripts/NaverScript';
import Back from '@/stories/Back';
import Active from '../modules/Activity/ActiveActivity';

export default function Main() {
      
    // Naver Map
    const mapElement = useRef(null);

    useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(36.989242576545074, 127.10616097987223);
    const mapOptions: naver.maps.MapOptions = {
        center: location,
        zoom: 17,
        minZoom: 8, //지도의 최소 줌 레벨
        zoomControl: false,
        logoControl: false,
        scaleControl: false,
        disableKineticPan: false,
        tileTransition: false,
        zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
        },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
        position: new naver.maps.LatLng(36.989242576545074, 127.10616097987223),
        map,
    });
    }, []);

    console.log("MAIN RAN");
    
    return (
        <>
            <SearchActivity/>

            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <Active/>
            </div>
            <Back/>
            <NaverScript/>
        </>
    );
}