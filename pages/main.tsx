import React, { useState, useEffect } from 'react';
import DragPill from '@/stories/DragPill';
import Filter from '@/stories/Filter';
import ServerNear from '@/modules/ServerNear';
import Search from '@/stories/Search';
import styles from '@/stories/DragActivity.module.css'
import Theme from '@/stories/Theme';


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
            '펌프 잇 업',
            'maimai DX',
            'maimai Finale',
            '츄니즘',
            '팝픈뮤직',
            'DDR',
            '태고의 달인',
            '노스탤지어',
            '유비트',
            '기타프릭스',
            '드럼매니아',
            '댄스러시',
            '리플렉 비트',
            'WACCA',
            '비트온'
        ].map(title => (
            <Filter key={title} Title={title} onClick={handleFilterClick}/>
        ))}
        </div>
    );
}

function Main() {
    // 필터 캡슐이 눌릴때 FilterList에 추가할지 제거할지 결정합니다.
    const [FilterList, setFilterList] = useState([]);
    
    function handleFilterClick(title: never) {
        // 만약 이미 리스트에 해당 필터가 있다면
        if (FilterList.includes(title)) {
            // 새로운 Array에 해당 필터를 제외한 이름만 넣고 업데이트
            setFilterList(FilterList.filter((t) => t !== title));
        } else {
            // 만약 없다면, 새로운 Array에 그 이름을 포함하여 추가
            setFilterList([...FilterList, title]);
        }
    }

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
            <Theme/>
            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                
                <div className={styles.GroupMap}>

                    <div className={`${styles.SmallGroupMapSearch} ${isActive ? 'active' : ''}`}>
                        <Search LeftIcon='' Placeholder='오락실 검색' RightIcon='' V_RightIcon={false}/>
                        {/* 검색창 다시 만들 예정 */}
                        <FilterSettings onFilterClick={handleFilterClick}/>
                    </div>

                    <div className='SmallGroupContent'>  {/* 근처 오락실 */}
                        <ServerNear latitude={latitude} longitude={longitude} FilterList={FilterList}/>
                    </div>

                </div>
            </div>
            
        </>
    );
};

export default Main;