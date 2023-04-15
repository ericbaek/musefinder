import React, { useState, useEffect } from "react";
import ContentTitle from '@/stories/ContentTitle';
import axios from 'axios';

import Button from '@/stories/Button';
import Card from '@/stories/Card';
import ConvertDistance from "./ConvertDistance";

export default function ServerNear({latitude, longitude, FilterList}) {
    const [arcadesWithDistance, setArcades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /* 
    본인의 위치를 보내고 서버에게서 거리순으로 정렬된 아케이드 리스트를 받아옵니다.
    받아온 json파일은 ID, 아케이드의 lati & Longi, 도로명 주소, 유저로부터 거리를 포함하고 있습니다
    */
    const fetchData = async (latitude, longitude, FilterList) => {
      console.log(latitude, longitude,FilterList);
      if (latitude !== 0 && longitude !== 0){
        try {
          let apiUrl = `/api/arcades?latitude=${latitude}&longitude=${longitude}`;

          if (FilterList.length > 0) {
            const filterListString = FilterList.join(',');
            apiUrl += `&filterList=${filterListString}`;
          }

          const response = await axios.get(apiUrl);
          setArcades(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    useEffect(() => {
      fetchData(latitude, longitude, FilterList);
    }, [latitude, longitude, FilterList]);

    // 거리에 따른 Accent 컬러를 바꿉니다.
    const getAccentBG = (distance) => {
        if (distance < 15) {
          return "var(--color-dynamic-water)";
        } else if (distance >= 15 && distance <= 50) {
          return "var(--color-dynamic-sand)";
        } else {
          return "var(--color-dynamic-coral)";
        }
    };

    const [numCards, setNumCards] = useState(3); // 카드는 3개 노출부터 시작.

    // API에서 딜레이가 생길때, 유저의 GPS가 0,0 일때 해당 메세지가 표시됩니다.
    if (isLoading) {
      return <div>Loading... (or maybe GPS Permission denied)</div>;
    }
  
    // 서버에서 찾아온 아케이드가 없을때 해당 메세지를 표시합니다.
    if (arcadesWithDistance.length === 0) {
      return <div>No arcades found</div>;
    }
    
    return (
        <div className="Column Gap-16">
          <ContentTitle Title="근처 오락실" />
          <div className="Column Group-Card">
            {arcadesWithDistance
              .slice(0, numCards)
              .map((arcade, index) => (
                <React.Fragment key={index}>
                  <Card
                    Primary
                    Title={arcade.name}
                    Paragraph={arcade.address}
                    Accent
                    AccentBG={getAccentBG(arcade.distance)}
                    AccentText={<ConvertDistance km={arcade.distance} />}
                  />
                  {index !== arcadesWithDistance.length - 1 &&
                    index !== numCards - 1 && <hr />}{" "}
                  {/* 마지막 카드를 제외하고 <hr>를 넣음 */}
                </React.Fragment>
              ))}
          </div>
          {numCards < arcadesWithDistance.length && (
            <Button
              Icon=""
              Title="더보기"
              onClick={() => setNumCards(numCards + 3)}
            />
          )}
        </div>
      );
    }