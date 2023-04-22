import { useState, useRef, useEffect } from 'react';
import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import ActiveActivity from '@/modules/Activity/ActiveActivity';
import SearchActivity from '@/modules/SearchActivity';
import ThirdScripts from '@/modules/ThirdScripts';


export default function Main() {
    const [showActive, setShowActive] = useState(true);

    function handleCardClick() {
      setShowActive(true);
    }

    function handleBackClick() {
        setShowActive(false);
      }

      
    // Naver Map
    const mapElement = useRef(null);

    useEffect(() => {
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
            
            <div className={styles.Map} ref={mapElement}/>
            <ThirdScripts/>
        </>
    );
}