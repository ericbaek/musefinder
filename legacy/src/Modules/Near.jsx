// Home.jsx에서 건내받은 유저의 위치를 기준으로 가장 가까운 아케이드를 찾아내는 js

import React, {useEffect, useState} from "react";

import '../DesignSystem/Import.js';
import ContentTitle from '../DesignSystem/Component/In-Content/ContentTitle';
import Button from '../DesignSystem/Component/In-Content/Button';
import Card from '../DesignSystem/Component/In-Content/Card';
import * as geolib from 'geolib';

import ConvertDistance from './ConvertDistance';
import arcadesData from '../Arcades.json';

export default function Near({latitude, longitude, FilterList}) {
    // 거리에 따른 Accent color 지정
    var BGLocationNear = { background : 'var(--color-dynamic-water)', color : 'white' } /* < 15km */
    var BGLocationMedium = { background : 'var(--color-dynamic-sand)', color : 'white' } /* 15 ~ 50km */
    var BGLocationFar = { background : 'var(--color-dynamic-coral)', color : 'white' } /* > 50km */

    /* Card */
    /* Right Accent 미사용 시 { NoAccent } 처리 */
    var NoAccent = { display : 'none' }
    /* 저장한 장소 및 근처 오락실까지의 거리를 기준으로 한 배경색 */

    const filterGnames = ["IIDX"];
    const filteredArcades = arcadesData.filter(arcade => 
        filterGnames.every(filterGname =>
            arcade.games.some(game => 
                game.Gname === filterGname)
        )
    );
    console.log(filteredArcades);

    // User Location을 저장하고 기준으로 모든 아케이드에 distance 변수와 이에 따른 Accent 변수 추가
    const userLocation = { latitude, longitude };
    const arcadesWithDistance = filteredArcades.map((arcade) => {
      const distanceInMeters = geolib.getDistance(userLocation, arcade);
      const distanceInKm = distanceInMeters / 1000;
      let accent = BGLocationFar;
      if (distanceInKm < 15) {
        accent = BGLocationNear;
      } else if (distanceInKm >= 15 && distanceInKm <= 50) {
        accent = BGLocationMedium;
      }
      return { ...arcade, distance: distanceInKm, accent};
      // parseFloat(distanceInKm.toPrecision(4)) 를 사용해서 round-up 할 수 있음.
    });
    console.log(arcadesWithDistance);
    
    // distance 기준으로 정렬하기
    arcadesWithDistance.sort((a, b) => a.distance - b.distance);


    const [numCards, setNumCards] = useState(3); // 카드는 3개 노출부터 시작.
    console.log(arcadesWithDistance);

    return (

        <div className="Column Gap-16">
            <ContentTitle Title="근처 오락실" Paragraph="필터"/>
            <div className="Column Group-Card">
                {arcadesWithDistance.slice(0, numCards).map((arcade, index) => (
                    <React.Fragment key={index}>
                        <Card Title={arcade.name} 
                            Paragraph={arcade.address} 
                            AccentText={<ConvertDistance km={arcade.distance} />}
                            Accent={arcade.accent}/>
                        {index !== arcadesWithDistance.length - 1 && index !== numCards - 1 && <hr />} {/* 마지막 카드를 제외하고 <hr>를 넣음 */}
                    </React.Fragment>
                ))}
            </div>
            {numCards < arcadesWithDistance.length && (
                <Button Icon="" Title="더보기" onClick={() => setNumCards(numCards + 3)}/>
            )}
        </div>
    );
}