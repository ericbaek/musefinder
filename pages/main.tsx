import { useState, useRef, useEffect } from 'react';
import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import SearchActivity from '@/modules/Activity/SearchActivity';
import Drag from '@/modules/Drag';

export default function Main() {
      
    const mapElement = useRef(null);

    useEffect(() => {
        const MIN_Y = 60;
        const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;
            
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.5656, 126.9769);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });

        return () => {
            <>
                    <style jsx>{`
                        .${styles.DragActivity} {
                        }
                    `}</style>
            </>
        };
    }, []);
    
    const { sheet, content } = Drag();

    return (
        <>
            <SearchActivity/>
            <div className={styles.DragActivity} ref={sheet}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <div ref={content}>
                    <MapActivity/>
                </div>
            </div>
            <div className={styles.Map} ref={mapElement}/>
        </>
    );
}