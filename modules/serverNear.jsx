import React, { useState } from "react";
import ContentTitle from '@/stories/ContentTitle';
import axios from 'axios';

import Button from '@/stories/Button';
import Card from '@/stories/Card';
import ConvertDistance from './ConvertDistance';

export default function ServerNear({latitude, longitude}) {
    const [arcadesWithDistance, setArcades] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/arcades');
          setArcades(response.data); // You can use the response data in your code
        } catch (error) {
          console.error(error);
        }
    };

    fetchData();

    const [numCards, setNumCards] = useState(3); // 카드는 3개 노출부터 시작.
    return (
        <div className="Column Gap-16">
            <ContentTitle Title="근처 오락실" Paragraph="필터"/>
            <div className="Column Group-Card">
                {arcadesWithDistance.slice(0, numCards).map((arcade, index) => (
                    <React.Fragment key={index}>
                        <Card Primary Title={arcade.name} Paragraph={arcade.address} Accent AccentBG={arcade.distancecolor} AccentText={<ConvertDistance km={arcade.distance} />}/>
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