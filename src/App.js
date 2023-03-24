import React, { useState } from 'react';
import * as geolib from 'geolib';
import './App.css';

function App() {
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
    {name:"범계 게임천국", address:"경기 안양시 동안구 평촌대로223번길 64 제일빌딩 지하1층", latitude:37.390380, longitude:126.952117}
  ]

  let ArcadesByDistances = [];
  ArcadesByDistances = geolib.orderByDistance({latitude, longitude}, arcades);
  console.log(ArcadesByDistances);

  return (
    <div className="App">
      <div>
      귀하의 위치는 { latitude }, { longitude }입니다.
      </div>
      <div>
        1위. <b>{ArcadesByDistances[0].name}</b><span>({ArcadesByDistances[0].address})</span>
      </div>
      <div>
        2위. <b>{ArcadesByDistances[1].name}</b><span>({ArcadesByDistances[1].address})</span>
      </div>
      <div>
        3위. <b>{ArcadesByDistances[2].name}</b><span>({ArcadesByDistances[2].address})</span>
      </div>
    </div>
  );
}

export default App;
