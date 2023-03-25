import React, { useState } from 'react';
import * as geolib from 'geolib';

import '../DesignSystem/Import.js';
import Card from '../DesignSystem/Component/In-Content/Card';

function Near() {
    var BGLocationNear = { background : 'hsl(213, 100%, 56%)', color : 'white' } /* < 5km */
    var BGLocationMedium = { background : 'hsl(39, 85%, 53%)', color : 'white' } /* < 10km */
    var BGLocationFar = { background : 'hsl(0, 79%, 56%)', color : 'white' } /* > 10km */

    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    React.useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => 
      { 
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
      },)
    })
    
    let arcades = [
      {name:"어뮤즈타운", address:"서울특별시 동작구 노량진1동 만양로14가길 26", latitude:37.512765 ,longitude:126.944949},
      {name:"짱오락실 서울대입구점", address:"서울특별시 관악구 관악로15길 6", latitude:37.480471, longitude:126.951978},
      {name:"수원 오락실", address:"경기도 수원시 팔달구 매산로1가 57-99", latitude:37.266399, longitude:127.001713},
      {name:"펀시티 건대점", address:"서울 광진구 동일로22길 81 1층", latitude:37.539794, longitude:127.070410},
      {name:"범계 게임천국", address:"합정역 2번 출구에서 127m", latitude:37.390380, longitude:126.952117}
    ]
    
    let ArcadesByDistances = [];
    ArcadesByDistances = geolib.orderByDistance({latitude, longitude}, arcades);
    console.log(ArcadesByDistances);

    return (
      <div>
          <Card Title={ArcadesByDistances[0].name} Paragraph={ArcadesByDistances[0].address} AccentText="3.2km" Accent={ BGLocationNear }/>
          <hr></hr>
          <Card Title={ArcadesByDistances[1].name} Paragraph={ArcadesByDistances[1].address} AccentText="6.3km" Accent={ BGLocationMedium }/>
          <hr></hr>
          <Card Title={ArcadesByDistances[2].name} Paragraph={ArcadesByDistances[2].address} AccentText="12km" Accent={ BGLocationFar }/>
      </div>
    );
}

export default Near;