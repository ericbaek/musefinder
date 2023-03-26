// km단위의 float를 받아서 거리에 따라서 소숫점 round up 과 필요하다면 단위 변환을 해줌.

import React from 'react';

function ConvertDistance({ km }) {
    let distance;
    let unit;
    let roundup = 0;
  
    // m 단위로 변환하거나
    if (km < 1) {
      distance = km * 1000;
      unit = 'm';
    } else if (km >= 1 && km < 10) {
      distance = km;
      unit = 'km';
      roundup = 1;
    } else {
        distance = km;
        unit = 'km'
    }
  
    return (
      <span>{distance.toFixed(roundup)}{unit}</span>
    );
}

export default ConvertDistance;