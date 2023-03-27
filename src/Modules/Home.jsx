import React, { useState } from 'react';

import '../DesignSystem/Import.js';
import Button from '../DesignSystem/Component/In-Content/Button';
import Card from '../DesignSystem/Component/In-Content/Card';
import ContentTitle from '../DesignSystem/Component/In-Content/ContentTitle';
import FilterSet from '../DesignSystem/Component/In-Content/FilterSet';
import Search from '../DesignSystem/Component/In-Content/Search';
import Near from './Near';

import ConvertDistance from './ConvertDistance';


function Home() {

    /* Card */
    /* Right Accent 미사용 시 { NoAccent } 처리 */
    var NoAccent = { display : 'none' }
    /* 저장한 장소 및 근처 오락실까지의 거리를 기준으로 한 배경색 */
    var BGLocationNear = { background : 'var(--color-dynamic-water)', color : 'white' } /* < 15km */
    var BGLocationMedium = { background : 'var(--color-dynamic-sand)', color : 'white' } /* 15 ~ 50km */
    var BGLocationFar = { background : 'var(--color-dynamic-coral)', color : 'white' } /* > 50km */

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
        /* 1280px 이상에서의 검색창 + 메인 액티비티 */
        <div>
          <div className="Home Desktop Column Gap-16">
            <div className="SearchTop">
              <Search Icon="" Placeholder="검색" Sort=""/>
              <div className="Group-FilterSet">
                <FilterSet Title="IIDX"/>
                <FilterSet Title="SDVX"/>
                <FilterSet Title="유비트"/>
                <FilterSet Title="팝픈뮤직"/>
              </div>
            </div>
            <div className="MainActivity MainActivity-DesktopHome"> { /* 메인 액티비티 */ }
              <div className="Column Gap-16">
                <ContentTitle Title="저장한 장소" Paragraph="관리"/>
                <div className="Row Gap-8">
                  <Card Title="펀시티 건대점" Paragraph={<ConvertDistance km={0.349} />} AccentText="" Accent={ NoAccent }/>
                  <Card Title="노원 노리존" Paragraph={<ConvertDistance km={9.82} />} AccentText="" Accent={ NoAccent }/>
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
                  <Search Icon="" Placeholder="검색" Sort=""/>
                  <div className="Group-FilterSet">
                    <FilterSet Title="IIDX"/>
                    <FilterSet Title="SDVX"/>
                    <FilterSet Title="유비트"/>
                    <FilterSet Title="팝픈뮤직"/>
                  </div>
                </div>
                <div className="Column Gap-16">
                  <ContentTitle Title="저장한 장소" Paragraph="관리"/>
                  <div className="Row Gap-8">
                    <Card Title="펀시티 건대점" Paragraph={<ConvertDistance km={0.349} />} AccentText="" Accent={ NoAccent }/>
                    <Card Title="노원 노리존" Paragraph={<ConvertDistance km={9.82} />} AccentText="" Accent={ NoAccent }/>
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