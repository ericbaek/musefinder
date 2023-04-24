import { useEffect, useRef } from 'react';
import Script from 'next/script';
import LocationIcon from '@/stories/LocationIcon';

export default function NaverScript() {

    const mapElement = useRef(null);

    useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions: naver.maps.MapOptions = {
        background: '#FFF',
        center: location,
        zoom: 17,
        minZoom: 8,
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

    console.log("MAIN RAN");
    

    return (
        <>
            <div className='Map' ref={mapElement}/>
            <LocationIcon/>
            <Script id="navermap" strategy="beforeInteractive" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jvaprt0m2p" />
            <style jsx>{`
                        .Map {
                            position: fixed !important;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 1;
                        }
            `}</style>
        </>
    )
}