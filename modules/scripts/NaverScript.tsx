import { useEffect, useRef } from 'react';
import Script from 'next/script';
import InterfaceIcon from '@/stories/InterfaceIcon';

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
            logoControl: true,
            scaleControl: false,
            disableKineticPan: false,
            tileTransition: true,
            zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);
    }, []);

    console.log("MAIN RAN");
    

    return (
        <>
            <div className='Map' ref={mapElement}/>
            <div className='LocationIcon'>
                <InterfaceIcon Icon=''/>
            </div>
            <Script id="navermap" strategy="beforeInteractive" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jvaprt0m2p" />
            <style jsx>{`
                .LocationIcon {
                    position: fixed;
                    right: var(--padding-activity);
                    top: var(--padding-activity);
                    z-index: 500;
                }

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

                .map_copyright {
                    font-family: var(--font-sans-serif);
                }
            `}</style>
        </>
    )
}