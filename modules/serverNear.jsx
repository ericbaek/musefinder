import React, { useState, useEffect } from "react";
import ContentTitle from '@/stories/ContentTitle';
import axios from 'axios';

import Button from '@/stories/Button';
import Card from '@/stories/Card';
import ConvertDistance from "./ConvertDistance";

export default function ServerNear({latitude, longitude}) {
    const [arcadesWithDistance, setArcades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (latitude, longitude) => {
      console.log(latitude, longitude);
      if (latitude !== 0 && longitude !== 0){
        try {
          const response = await axios.get(`http://localhost:3001/api/arcades?latitude=${latitude}&longitude=${longitude}`);
          setArcades(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    useEffect(() => {
      fetchData(latitude, longitude);
    }, [latitude, longitude]);

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

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
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