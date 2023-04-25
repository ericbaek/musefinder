import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '@/stories/Card';
import ConvertDistance from "@/modules/ConvertDistance";
import Alert from "@/stories/Alert";
/* import Tab from "@/stories/Tab"; */

export default function AllGameActivity({FilterList}: {FilterList: any;}) {
    const [arcadesWithDistance, setArcades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const latitude = 1;
    const longitude = 1;

    /* 
    본인의 위치를 보내고 서버에게서 거리순으로 정렬된 아케이드 리스트를 받아옵니다.
    받아온 json파일은 ID, 아케이드의 lati & Longi, 도로명 주소, 유저로부터 거리를 포함하고 있습니다
    */
    const fetchData = async (latitude: number, longitude: number, FilterList: any[]) => {
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
    const getAccentBG = (distance: number) => {
        if (distance < 15) {
          return "var(--color-dynamic-water)";
        } else if (distance >= 15 && distance <= 50) {
          return "var(--color-dynamic-sand)";
        } else {
          return "var(--color-dynamic-coral)";
        }
    };

    const [numCards] = useState(0); // 카드는 3개 노출부터 시작.

    // API에서 딜레이가 생길때, 유저의 GPS가 0,0 일때 해당 메세지가 표시됩니다.
    if (isLoading) {
      return (
        <>
            <Alert V_LeftIcon LeftIcon='' Title='위치 권한을 부여해 주세요.' V_Paragraph={false} Paragraph=''/>
        </>
      )
    }
  
    // 서버에서 찾아온 아케이드가 없을때 해당 메세지를 표시합니다.
    if (arcadesWithDistance.length === 0) {
      return (
        <>
            <Alert V_LeftIcon LeftIcon='' Title='해당되는 아케이드가 없습니다.' V_Paragraph={false} Paragraph=''/>
        </>
      );
    }
    
    return (
      <>
          <div className='SmallGroupCard'>
              {arcadesWithDistance.map((arcade: any, index) => (
                  <React.Fragment key={index}>
                      <Card
                          Title={arcade.name}
                          Paragraph={arcade.address}
                          Paragraph2="Paragraph2"
                          LeftIcon=""
                          LeftIconBG="var(--box-icon-color)"
                          LeftIconImage=""
                          AccentText={<ConvertDistance km={arcade.distance}/>}
                          AccentBG={getAccentBG(arcade.distance)}
                          RightIcon=""
                          BG="var(--bg-color)"
                          onClick={() => {}}
                          V_LeftIcon={false}
                          V_LeftIconBG
                          V_Paragraph
                          V_Paragraph2={false}
                          V_Accent
                          V_RightIcon={false}
                          V_BG={false}
                      />
                      {index !== arcadesWithDistance.length - 1 && index !== numCards - 1 && <hr />}
                      {/* 마지막 카드를 제외하고 <hr>를 넣음 */}
                  </React.Fragment>
              ))}
          </div>
      </>
  );
    }