import React, { useState } from 'react';

import '../DesignSystem/Import.js';
import Button from '../DesignSystem/Component/In-Content/Button';
import Card from '../DesignSystem/Component/In-Content/Card';
import ContentTitle from '../DesignSystem/Component/In-Content/ContentTitle';
import FilterTitle from '../DesignSystem/Component/In-Content/FilterTitle';
import FilterSet from '../DesignSystem/Component/In-Content/FilterSet';
import Search from '../DesignSystem/Component/In-Content/Search';
import Near from './Near';

import ConvertDistance from './ConvertDistance';

function FilterSettings() {
  return (
      <div className="Group-FilterSet Row Gap-8">
        <FilterSet Title="IIDX"/>
        <FilterSet Title="SDVX"/>
        <FilterSet Title="유비트"/>
        <FilterSet Title="팝픈뮤직"/>
        <FilterSet Title="노스탤지어"/>
        <FilterSet Title="기타프릭스"/>
        <FilterSet Title="드럼매니아"/>
        <FilterSet Title="댄스러시"/>
        <FilterSet Title="리플렉 비트"/>
        <FilterSet Title="마이마이"/>
        <FilterSet Title="츄니즘"/>
      </div>
  )
}

function Home() {

    /* Card */
    /* Right Accent 미사용 시 { NoAccent } 처리 */
    var NoAccent = { display : 'none' }

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

    return (
        <div>

          { /* 1280px 이상에서의 검색창 + 메인 액티비티 */ }
          <div className="Home Desktop Column Gap-16">
            <Search Icon="" Placeholder="검색" Filter=""/>
            <div className="MainActivity MainActivity-DesktopHome"> { /* 메인 액티비티 */ }
              <FilterSettings/>
              <div className="Column Gap-16">
                <ContentTitle Title="저장한 장소" Paragraph="관리"/>
                <div className="Row Gap-8">
                  <Card Class="Card CardSimple" Title="펀시티 건대점" Paragraph={<ConvertDistance km={0.349} />} AccentText="" Accent={ NoAccent }/>
                  <Card Class="Card CardSimple" Title="노원 노리존" Paragraph={<ConvertDistance km={9.82} />} AccentText="" Accent={ NoAccent }/>
                </div>
              </div>
              <Near latitude={latitude} longitude={longitude}/>
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
                  <FilterSettings/>
                </div>
                <div className="Column Gap-16">
                  <ContentTitle Title="저장한 장소" Paragraph="관리"/>
                  <div className="Row Gap-8">
                    <Card Class="Card CardSimple" Title="펀시티 건대점" Paragraph={<ConvertDistance km={0.349} />} AccentText="" Accent={ NoAccent }/>
                    <Card Class="Card CardSimple" Title="노원 노리존" Paragraph={<ConvertDistance km={9.82} />} AccentText="" Accent={ NoAccent }/>
                  </div>
                </div>
                <Near latitude={latitude} longitude={longitude}/>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Home;