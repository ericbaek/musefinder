import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import InterfaceIcon from '@/stories/InterfaceIcon';
import NAVER from '@/stories/assets/NAVER.svg';

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
            <div className='Naver'>
                <Image src={NAVER} alt="Naver" width={500} height={200}/>
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
                    width: 105%;
                    height: 105%;
                    z-index: 1;
                }

                .Naver {
                    position: fixed;
                    right: 0;
                    bottom: 0;
                    z-index: 2;
                }
            `}</style>
        </>
    )
}