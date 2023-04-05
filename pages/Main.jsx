// Main JS

import React, { useState } from 'react';

import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import ConvertDistance from '@/modules/ConvertDistance';
import FilterSet from '@/stories/FilterSet';
import Search from '@/stories/Search';
import Near from '@/modules/Near';

function FilterSettings(props) {

  function handleFilterClick(title) {
    props.onFilterClick(title);
  }

  return (
    <div className="Group-FilterSet Row Gap-8">
      <FilterSet Title="IIDX" onClick={ () => {handleFilterClick(); props.onClick()}} />
      <FilterSet Title="IIDX 라이트닝" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="SDVX" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="SDVX 발키리" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="펌프 잇 업" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="maimai DX" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="maimai Finale" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="츄니즘" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="팝픈뮤직" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="DDR" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="태고의 달인" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="노스탤지어" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="유비트" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="기타프릭스" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="드럼매니아" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="댄스러시" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="리플렉 비트" onClick={ () => {handleFilterClick();}} />
      <FilterSet Title="WACCA" onClick={ () => {handleFilterClick();}} />
    </div>
  );
}

function Main() {
  const [FilterList, setFilterList] = useState([]);
  
  function handleFilterClick(title) {
    if (FilterList.includes(title)) {
      setFilterList(FilterList.filter((t) => t !== title));
    } else {
      setFilterList([...FilterList, title]);
    }
  }
  
  console.log(FilterList);

    // 사용자의 GPS 위치를 가져다가 latitude & longitude로 저장함
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    React.useEffect(() => {
      navigator.geolocation.getCurrentPosition(
      (position) => 
      { 
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
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
            <Card Primary RadiusAll BG='var(--box-color)' Title='펀시티 건대점' Paragraph={<ConvertDistance km={0.349} />}/>
            <Card Primary RadiusAll BG='var(--box-color)' Title='노원 노리존' Paragraph={<ConvertDistance km={9} />}/>
          </div>
        </div>
      )
    }


    return (
        <div>

          { /* 1280px 이상에서의 검색창 + 메인 액티비티 */ }
          <div className="Home Desktop Column Gap-16">
            <Search Icon="" Placeholder="검색" Filter=""/>
            <div className="MainActivity MainActivity-DesktopHome"> { /* 메인 액티비티 */ }
              <FilterSettings onFilterClick={handleFilterClick}/>
              <SavedLocation/>
              <Near latitude={latitude} longitude={longitude} />
            </div>
          </div>

          { /* 1280px 미만에서의 검색창 + 메인 액티비티 */ }
          <div className="General">
            <div className="MainActivity"> { /* 메인 액티비티 */ }
              <div className="ActivityDetails">
                <div className="Drag">
                    <div className="DragPill"/>
                </div>
                <div className="SearchTop Column">
                  <Search Icon="" Placeholder="검색" Filter=""/>
                  <FilterSettings onFilterClick={handleFilterClick}/>
                </div>
                <SavedLocation/>
                <Near latitude={latitude} longitude={longitude}/>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Main;