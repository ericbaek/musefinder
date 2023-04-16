import React, { useState } from 'react';
import * as geolib from 'geolib';
import arcadesData from '@/Arcades.json';
import Button from '@/stories/Button';
import Card from '@/stories/Card'
import ConvertDistance from '../ConvertDistance';
import Tab from '@/stories/Tab';

export default function Near({latitude, longitude, FilterList}: {latitude: number; longitude: number; FilterList: any;}) {

    const filterGnames = ["IIDX"];
    const filteredArcades = arcadesData.filter(arcade => 
        filterGnames.every(filterGname =>
            arcade.games.some(game => 
                game.Gname === filterGname)
        )
    );

    // User Location을 저장하고 기준으로 모든 아케이드에 distance 변수와 이에 따른 Accent 변수 추가
    const userLocation = { latitude, longitude };
    const arcadesWithDistance = filteredArcades.map((arcade) => {
      const distanceInMeters = geolib.getDistance(userLocation, arcade);
      const distanceInKm = distanceInMeters / 1000;
      let distancecolor = 'var(--color-dynamic-coral)';
      if (distanceInKm < 15) {
        distancecolor = 'var(--color-dynamic-water)';
      } else if (distanceInKm >= 15 && distanceInKm <= 50) {
        distancecolor = 'var(--color-dynamic-sand)';
      }
      return { ...arcade, distance: distanceInKm, distancecolor};
      // parseFloat(distanceInKm.toPrecision(4)) 를 사용해서 round-up 할 수 있음.
    });
    
    // distance 기준으로 정렬하기
    arcadesWithDistance.sort((a, b) => a.distance - b.distance);

    const [numCards, setNumCards] = useState(3); // 카드는 3개 노출부터 시작.

    return (
        <>
            <div className=''>
                <div className='SmallGroupTab row'>
                    <Tab Href='/' Title='전체'/>
                    <Tab Href='/' Title='라이트닝 기체'/>
                </div>
                {arcadesWithDistance.slice(0, numCards).map((arcade, index) => (
                    <React.Fragment key={index}>
                        <Card
                            Href="/"
                            Title={arcade.name}
                            Paragraph={arcade.address}
                            Paragraph2="Paragraph2"
                            LeftIcon=""
                            LeftIconBG="var(--box-icon-color)"
                            LeftIconImage=""
                            AccentText={<ConvertDistance km={arcade.distance}/>}
                            AccentBG={arcade.distancecolor}
                            RightIcon=""
                            BG="var(--bg-color)"
                            onClick={() => { } }
                            V_LeftIcon={false}
                            V_LeftIconBG
                            V_Paragraph
                            V_Paragraph2={false}
                            V_Accent
                            V_RightIcon={false}
                            V_BG={false}
                        />
                        {index !== arcadesWithDistance.length - 1 && index !== numCards - 1 && <hr />} {/* 마지막 카드를 제외하고 <hr>를 넣음 */}
                    </React.Fragment>
                ))}
            </div>
            {numCards < arcadesWithDistance.length && (
                <Button Href='' Icon="" Title="더보기" onClick={() => setNumCards(numCards + 3)} V_Icon={false}/>
            )}
        </>
    );
}