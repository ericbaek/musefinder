import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '@/stories/Card';
import ConvertDistance from "@/modules/ConvertDistance";
import Alert from "@/stories/Alert";
/* import Tab from "@/stories/Tab"; */

// Firebase 관련 import
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function AllGameActivity({latitude, longitude, FilterList}: {latitude: number; longitude: number; FilterList: any;}) {

    /* 
    본인의 위치를 보내고 서버에게서 거리순으로 정렬된 아케이드 리스트를 받아옵니다.
    받아온 json파일은 ID, 아케이드의 lati & Longi, 도로명 주소, 유저로부터 거리를 포함하고 있습니다
    */
    const [documents, setDocuments] = useState([]);
    
    useEffect(() => {
      const getDocuments = async () => {
        const colRef = collection(db, 'arcades');
        const snapshot = await getDocs(colRef);
        const documents = snapshot.docs.map(doc => doc.data());
        console.log(documents);
      };
      getDocuments();
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
          <div className='SmallGroupCard'>
            일단 여기에 뭔가 넣어야함/
          </div>
      </>
  );
    }