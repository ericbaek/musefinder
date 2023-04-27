import React, { useState, useEffect } from "react";
import Card from '@/stories/Card';
import ConvertDistance from "@/modules/ConvertDistance";
import Alert from "@/stories/Alert";
import { getUserLocation } from './scripts/GetUserLocation';
/* import Tab from "@/stories/Tab"; */

// Firebase 관련 import
import { GeoPoint, getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { db } from '../firebase';
import CalculateDistance from "./scripts/CalculateDistance";
import ContentTitle from "@/stories/ContentTitle";

// Dynamic Route를 위한 import
import { useRouter } from 'next/router';

export default function ServerNear({lati, longi, FilterList}: {lati: number, longi: number, FilterList: any;}) {
    const router = useRouter();
    console.log("serverNear RAN");
    /* 
    본인의 위치를 보내고 DB에서 아케이드 리스트를 받아옵니다.
    */
    interface Arcade {
      name: string;
      address: string;
      location: {
        latitude: number;
        longitude: number;
      };
      games: {
        Gname: string;
        quantity: number;
        price: string;
      }[];
      distance : number;
    }
    
    // Firestore에서 DB 정보 받아옴
    const [documents, setDocuments] = useState<Arcade[]>([]);
    useEffect(() => {
      getUserLocation()
        .then((userLocation) => {
          console.log("UserLocation" , userLocation);
          const getDocuments = async () => {
            const snapshot = await getDocs(collection(db, "arcades"));
            const documents = snapshot.docs.map((doc) => {
              const data = doc.data() as Arcade;
              const distance = CalculateDistance(data.location, userLocation);
              return { ...data, distance, arcadeID: doc.id };
            });
            setDocuments(documents);
          };
          getDocuments();
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    
    const filteredArcades = documents.filter((arcade) => {
      // check if all games in filterlist exist in arcade.games
      return FilterList.every((game: any) =>
        Object.keys(arcade.games).includes(game)
      );
    });

    const sortedDocuments = filteredArcades.sort((a, b) => a.distance - b.distance);
    console.log(sortedDocuments);

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

    const [title, setTitle] = useState('주변 오락실');
    const [prevTitle, setPrevTitle] = useState('');
    const [viewMore, setViewMore] = useState(false);
    const numCards = viewMore ? sortedDocuments.length : 3;
  
    const handleClick = () => {
      if (title === '주변 오락실') {
        setTitle('모든 오락실');
        setPrevTitle('주변 오락실');
        setViewMore(true);
      } else {
        setTitle(prevTitle);
        setPrevTitle('');
        setViewMore(false);
      }
    };
  
    
    return (
      <div className='SmallGroupContent'>  {/* 근처 오락실 */}
        <ContentTitle Title={title} V_Paragraph Paragraph={prevTitle ? '돌아가기' : '모두 보기'} onClick={handleClick}/>
        <div>
        {sortedDocuments.slice(0, numCards).map((arcade: any, index) => (
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
                    onClick={() => router.push(`/${arcade.arcadeID}`, undefined, {shallow: true})}
                    V_LeftIcon={false}
                    V_LeftIconBG
                    V_Paragraph
                    V_Paragraph2={false}
                    V_Accent
                    V_RightIcon={false}
                    V_BG={false}
                />
                {index !== sortedDocuments.length - 1 && index !== numCards - 1 && <hr />}
                {/* 마지막 카드를 제외d하고 <hr>를 넣음 */}
            </React.Fragment>
        ))}
        </div>
      </div>
    );
  }