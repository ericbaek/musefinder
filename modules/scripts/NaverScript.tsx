import Script from 'next/script';

export default function NaverScript() {
    return (
        <>
            <Script id="navermap" strategy="beforeInteractive" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jvaprt0m2p" />
        </>
    )
}