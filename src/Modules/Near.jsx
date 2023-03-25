// 유저의 위치를 찾고, 기준으로 가장 가까운 아케이드를 찾아내는 js

import React, { useState } from 'react';
import * as geolib from 'geolib';

import '../DesignSystem/Import.js';
import Card from '../DesignSystem/Component/In-Content/Card';

function Near() {
    var BGLocationNear = { background : 'hsl(213, 100%, 56%)', color : 'white' } /* < 5km */
    var BGLocationMedium = { background : 'hsl(39, 85%, 53%)', color : 'white' } /* < 10km */
    var BGLocationFar = { background : 'hsl(0, 79%, 56%)', color : 'white' } /* > 10km */

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
        timeout: 30,
      })
    })
    
    // 테스트용 Array - 위치별로 latitude와 longitude를 가지고 있음
    let arcades = [
      {name:"어뮤즈타운", address:"서울특별시 동작구 노량진1동 만양로14가길 26", latitude:37.512765 ,longitude:126.944949},
      {name:"짱오락실 서울대입구점", address:"서울특별시 관악구 관악로15길 6", latitude:37.480471, longitude:126.951978},
      {name:"수원 오락실", address:"경기도 수원시 팔달구 매산로1가 57-99", latitude:37.266399, longitude:127.001713},
      {name:"펀시티 건대점", address:"서울 광진구 동일로22길 81 1층", latitude:37.539794, longitude:127.070410},
      {name:"범계 게임천국", address:"합정역 2번 출구에서 127m", latitude:37.390380, longitude:126.952117}
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
      <div>
          <Card Title={arcadesWithDistance[0].name} Paragraph={arcadesWithDistance[0].address} AccentText={arcadesWithDistance[0].distance} Accent={ BGLocationNear }/>
          <hr></hr>
          <Card Title={arcadesWithDistance[1].name} Paragraph={arcadesWithDistance[1].address} AccentText={arcadesWithDistance[1].distance} Accent={ BGLocationMedium }/>
          <hr></hr>
          <Card Title={arcadesWithDistance[2].name} Paragraph={arcadesWithDistance[2].address} AccentText={arcadesWithDistance[2].distance} Accent={ BGLocationFar }/>
      </div>
    );
}

export default Near;