import { useRef, useEffect } from 'react';
import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import SearchActivity from '@/modules/Activity/SearchActivity';
import Script from 'next/script';

export default function Main() {
      
    // Naver Map
    const mapElement = useRef(null);

    useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions: naver.maps.MapOptions = {
        background: 'background: var(--bg-color)',
        baseTileOpacity: 0,
        center: location,
        zoom: 17,
        minZoom: 12, //지도의 최소 줌 레벨
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
        position: new naver.maps.LatLng(37.50180355734507, 126.98714909796672),
        map,
    });
    }, []);
    
    return (
        <>
            <SearchActivity/>

            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <MapActivity/>
            </div>
            <Script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jvaprt0m2p" />
            <div className={styles.Map} ref={mapElement}/>
        </>
    );
}