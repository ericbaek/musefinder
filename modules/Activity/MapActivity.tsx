import React, { useState, useEffect } from 'react';
import Filter from '@/stories/Filter';
import ServerNear from '@/modules/ServerNear';
import styles from '@/stories/DragActivity.module.css';

function FilterSettings(props: any) {
    function handleFilterClick(title: any) {
      props.onFilterClick(title);
    }
    return (
        <div className={styles.GroupFilter}>
        {[
            'IIDX 라이트닝',
            'IIDX',
            'SDVX 발키리',
            'SDVX',
            'maimai DX',
            'maimai Finale',
            '츄니즘',
            '태고의 달인',
            '댄스러시',
            'DDR',
            '펌프 잇 업',
            '비트온',
            '노스탤지어',
            '유비트',
            '팝픈뮤직',
            '기타프릭스',
            '드럼매니아',
            'WACCA',
            '리플렉 비트'
        ].map(title => (
            <Filter key={title} Title={title} onClick={handleFilterClick}/>
        ))}
        </div>
    );
}

export default function MapActivity() {

    // 필터 캡슐이 눌릴때 FilterList에 추가할지 제거할지 결정합니다.
    const [FilterList, setFilterList] = useState([]);

    function handleFilterClick(title: never) {
        if (FilterList.includes(title)) {
        setFilterList(FilterList.filter((t) => t !== title));
        } else {
        setFilterList([...FilterList, title]);
        }
    }
    
    /*
    useEffect(() => {
    console.log(FilterList);
    }, [FilterList]);
    */
    // 사용자의 GPS 위치를 가져다가 latitude & longitude로 저장함
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

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

    // 필터 캡슐이 눌렸을때 색상 변경을 위한 변수값
    const isActive = useState(false);
    return (
        <>
            <div className={isActive ? 'active' : ''}>
                <FilterSettings onFilterClick={handleFilterClick}/>
            </div>
            <ServerNear lati={latitude} longi={longitude} FilterList={FilterList}/>
        </>
    );
};