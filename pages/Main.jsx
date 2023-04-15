// Main JS

import Arcades from '@/Arcades.json';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import ConvertDistance from '@/modules/ConvertDistance';
import FilterSet from '@/stories/FilterSet';
import Near from '@/modules/Near';
import Search from '@/stories/Search';
import LiveSearch from '@/modules/Search';
import ServerNear from '@/modules/serverNear';

function FilterSettings(props) {

  function handleFilterClick(title) {
    props.onFilterClick(title);
  }

  return (
    <div className="Group-FilterSet Row Gap-8">
      {[
        'IIDX',
        'IIDX 라이트닝',
        'SDVX',
        'SDVX 발키리',
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
        <FilterSet key={title} Title={title} onClick={handleFilterClick} />
      ))}
    </div>
  );
}

function Main() {
  // 필터 캡슐이 눌릴때 FilterList에 추가할지 제거할지 결정합니다.
  const [FilterList, setFilterList] = useState([]);
  
  function handleFilterClick(title) {
    if (FilterList.includes(title)) {
      setFilterList(FilterList.filter((t) => t !== title));
    } else {
      setFilterList([...FilterList, title]);
    }
  }
  
  // useEffect(() => {
  //   console.log(FilterList);
  // }, [FilterList]);

  // 사용자의 GPS 위치를 가져다가 latitude & longitude로 저장함
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
    (position) => 
    { 
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    },
    (error) =>
    {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 15,
      timeout: 100,
    })
  })

  function SavedLocation() {
    return (
      <div className="Column Gap-16">
        <ContentTitle Title="저장한 장소" Paragraph="관리"/>
        <div className="Row Gap-8">
          {Arcades.map((arcade) => (
            <Card key={arcade.id} name={arcade.name} Primary RadiusAll BG='var(--box-color)' Title='펀시티 건대점' Paragraph={<ConvertDistance km={0.349}/>}/>
          ))}
          <Link href="/Active">
            <Card Primary RadiusAll BG='var(--box-color)' Title='노원 노리존' Paragraph={<ConvertDistance km={9}/>}/>
          </Link>
        </div>
      </div>
    )
  }

  // 필터 캡슐이 눌렸을때 색상 변경을 위한 변수값
  const isActive = useState(false);

  return (
    <>
      { /* 1280px 이상에서의 검색창 + 메인 액티비티 */ }
      <div className="Desktop Column Gap-16">
        <Search Icon="" Placeholder="검색" IconFilter=""/>
        <div className={`MainActivity MainActivity-DesktopHome ${isActive ? 'active' : ''}`}>
          <FilterSettings onFilterClick={handleFilterClick}/>
          <SavedLocation/>
          <ServerNear latitude={latitude} longitude={longitude} FilterList={FilterList} />
        </div>
      </div>

      { /* 1280px 미만에서의 검색창 + 메인 액티비티 */ }
      <div className="General">
        <div className={`MainActivity ${isActive ? 'active' : ''}`}>
          <div className="ActivityDetails">
            <div className="Drag">
              <div className="DragPill"/>
            </div>
            <div className="SearchTop Column">
              <Search Icon="" Placeholder="검색" IconFilter=""/>
              <FilterSettings onFilterClick={handleFilterClick}/>
            </div>
            {/* <SavedLocation/> */}
            <ServerNear latitude={latitude} longitude={longitude} FilterList={FilterList} />
            {/* <Near latitude={latitude} longitude={longitude}/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;