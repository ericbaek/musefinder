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

export default function ServerNear({latitude, longitude, FilterList}: {latitude: number; longitude: number; FilterList: any;}) {
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
    }

    const [documents, setDocuments] = useState<Arcade[]>([]);
    const colRef = collection(db, "arcades");
    useEffect(() => {
      getUserLocation()
        .then((userLocation) => {
          const getDocuments = async () => {
            const snapshot = await getDocs(colRef);
            const documents = snapshot.docs.map((doc) => {
              const data = doc.data() as Arcade;
              const distance = CalculateDistance(data.location, userLocation);
              return { ...data, distance };
            });
            console.log(documents);
            setDocuments(documents);
          };
          getDocuments();
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

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

    const [numCards, SetnumCards] = useState(3);
    
    return (
      <>
        <div>
          {documents.map((arcade: any, index) => (
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
                      {index !== documents.length - 1 && index !== numCards - 1 && <hr />}
                      {/* 마지막 카드를 제외하고 <hr>를 넣음 */}
                  </React.Fragment>
            ))}
        </div>
      </>
    );
  }