import { useRef, useEffect, useState } from 'react';
import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import SearchActivity from '@/modules/Activity/SearchActivity';
import Script from 'next/script';

import NaverScript from '@/modules/scripts/NaverScript';
import Back from '@/stories/Back';

import { getUserLocation } from '../modules/scripts/GetUserLocation';

export default function Main() {

    // 사용자의 GPS 위치를 가져다가 latitude & longitude로 저장함
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    console.log(latitude, longitude);
    
    useEffect(() => {
        const success = (position: any) => { 
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        };
    
        const error = (error: any) => {
        console.error(error);
        };
    
        const options = {
        enableHighAccuracy: true,
        maximumAge: 15,
        timeout: 10000,
        };
    
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
        console.error("Geolocation is not supported by this browser.");
        }
    }, []);
      
    // Naver Map
    const mapElement = useRef(null);

    useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(latitude, longitude);
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
                <MapActivity/>
            </div>
            <Back/>
            <NaverScript/>
        </>
    );
}