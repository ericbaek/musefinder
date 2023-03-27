// 유저의 위치를 찾고, 기준으로 가장 가까운 아케이드를 찾아내는 js

import React, { useState } from 'react';
import * as geolib from 'geolib';

import '../DesignSystem/Import.js';
import Button from '../DesignSystem/Component/In-Content/Button';
import Card from '../DesignSystem/Component/In-Content/Card';
import ContentTitle from '../DesignSystem/Component/In-Content/ContentTitle';
import FilterSet from '../DesignSystem/Component/In-Content/FilterSet';
import Search from '../DesignSystem/Component/In-Content/Search';

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
    
    // 테스트용 Array - 위치별로 latitude와 longitude를 가지고 있음
    let arcades = [
      {name:"어뮤즈타운", address:"노량진역 3번 출구에서 301m", latitude:37.512765 ,longitude:126.944949},
      {name:"짱오락실 서울대입구점", address:"서울대입구역 3번 출구에서 107m", latitude:37.480471, longitude:126.951978},
      {name:"수원역 짱오락실", address:"수원역 10번 출구", latitude:37.266399, longitude:127.001713},
      {name:"펀시티 건대점", address:"건대입구역 1번 출구에서 162m", latitude:37.539794, longitude:127.070410},
      {name:"범계게임천국", address:"범계역 1번 출구에서 60m", latitude:37.390380, longitude:126.952117}
    ]

    // User Location을 저장하고 기준으로 모든 아케이드에 distance 변수를 추가함
    const userLocation = { latitude, longitude };
    const arcadesWithDistance = arcades.map((arcade) => {
      const distanceInMeters = geolib.getDistance(userLocation, arcade);
      const distanceInKm = distanceInMeters / 1000;
      return { ...arcade, distance: distanceInKm};
      // parseFloat(distanceInKm.toPrecision(4)) 를 사용해서 round-up 할 수 있음.
    });
    console.log(arcadesWithDistance);
    
    // distance 기준으로 정렬하기
    arcadesWithDistance.sort((a, b) => a.distance - b.distance);

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
              <div className="Column Gap-16"> { /* 그룹 내 Flex / Column / Gap */ }
                <ContentTitle Title="근처 오락실" Paragraph="필터"/>
                <div className="Column Group-Card">
                  <Card Title={arcadesWithDistance[0].name} 
                  Paragraph={arcadesWithDistance[0].address} 
                  AccentText={<ConvertDistance km={arcadesWithDistance[0].distance} />}
                  Accent={ BGLocationNear }/>
                  <hr/>
                  <Card Title={arcadesWithDistance[1].name} 
                  Paragraph={arcadesWithDistance[1].address} 
                  AccentText={<ConvertDistance km={arcadesWithDistance[1].distance} />}
                  Accent={ BGLocationMedium }/>
                  <hr/>
                  <Card Title={arcadesWithDistance[2].name} 
                  Paragraph={arcadesWithDistance[2].address} 
                  AccentText={<ConvertDistance km={arcadesWithDistance[2].distance} />}
                  Accent={ BGLocationFar }/>
                </div>
                <Button Icon="" Title="더보기"/>
              </div>
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
                <div className="Column Gap-16"> { /* 그룹 내 Flex / Column / Gap */ }
                  <ContentTitle Title="근처 오락실" Paragraph="필터"/>
                  <div className="Column Group-Card">
                    <Card Title={arcadesWithDistance[0].name} 
                    Paragraph={arcadesWithDistance[0].address} 
                    AccentText={<ConvertDistance km={arcadesWithDistance[0].distance} />}
                    Accent={ BGLocationNear }/>
                    <hr/>
                    <Card Title={arcadesWithDistance[1].name} 
                    Paragraph={arcadesWithDistance[1].address} 
                    AccentText={<ConvertDistance km={arcadesWithDistance[1].distance} />}
                    Accent={ BGLocationMedium }/>
                    <hr/>
                    <Card Title={arcadesWithDistance[2].name} 
                    Paragraph={arcadesWithDistance[2].address} 
                    AccentText={<ConvertDistance km={arcadesWithDistance[2].distance} />} 
                    Accent={ BGLocationFar }/>
                  </div>
                  <Button Icon="" Title="더보기"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Home;