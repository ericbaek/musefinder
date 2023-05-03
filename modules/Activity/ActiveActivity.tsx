import React, { useEffect, useState } from 'react';
import styles from '@/stories/DragActivity.module.css';
import Alert from '@/stories/Alert';
import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import Icon from '@/stories/Icon';
import LargeTitle from '@/stories/LargeTitle';
import Picture from '@/stories/Picture';
import Button from '@/stories/Button';

// Firebase 관련 import
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { db } from '../../firebase';
import SurveyActivity from './SurveyActivity';

interface Props {
arcadeID: string
}

interface ArcadeData {
    name: string;
    address: string;
    games: Record<string, { Gname: string; quantity: number; price: string }>;
}

export default function ActiveActivity({ arcadeID }: Props) {
    const [arcadeData, setArcadeData] = useState<ArcadeData | null>(null);
    const [showComponent, setShowComponent] = useState(false);

    function OpenClick() {
        setShowComponent(true);
    }

    function CloseClick() {
        setShowComponent(false);
    }

    useEffect(() => {
      const getArcadeData = async () => {
        try {
          const docRef = doc(db, 'arcades', arcadeID);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const data = docSnap.data() as ArcadeData;
            setArcadeData(data);
          } else {
            console.log('No such document!');
          }
        } catch (e) {
          console.log('Error getting arcade data:', e);
        }
      };
  
      if (arcadeID) {
        getArcadeData();
      }
    }, [arcadeID]);
  
    if (!arcadeID) {
      return <div>Invalid arcade ID</div>;
    }
  
    if (!arcadeData) {
      return <div>Loading arcade data...</div>;
    }

    console.log(arcadeData);

    return (
        <>

            {showComponent && <SurveyActivity onClick={CloseClick} />}

            <div className={styles.GroupPicture}>
                <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
            </div>

            <div className='GroupContent'>

                <div className={styles.GroupActiveTitle}>
                    <LargeTitle Title={arcadeData.name}/>
                    <div className={styles.SmallGroupActiveTitle_Right}>
                        {/* <Icon Icon=''/> */}
                        <Icon Icon=''/>
                    </div>
                </div>

                <div className='SmallGroupContent'> 
                    {/* 상세 위치 */}
                    <div className='Grid'> {/* 오픈, 신고 */}
                        <div className='Span-2'>
                            <Card
                                Title={arcadeData.address}
                                Paragraph="건국대 1번출구에서 162m"
                                Paragraph2="Paragraph2"
                                LeftIcon=""
                                LeftIconBG="var(--box-icon-color)"
                                LeftIconImage=""
                                AccentText="Dist"
                                AccentBG="var(--color-dynamic-muse)"
                                RightIcon=""
                                BG="var(--bg-color)"
                                onClick={() => { }}
                                V_LeftIcon={false}
                                V_LeftIconBG
                                V_Paragraph
                                V_Paragraph2={false}
                                V_Accent={false}
                                V_RightIcon={false}
                                V_BG={false}
                            />
                        </div>
                        <div>
                            <Card
                                Title="영업중"
                                Paragraph="07:00 - 05:00"
                                Paragraph2="Paragraph2"
                                LeftIcon=""
                                LeftIconBG="var(--box-icon-color)"
                                LeftIconImage=""
                                AccentText="Dist"
                                AccentBG="var(--color-dynamic-muse)"
                                RightIcon=""
                                BG="var(--bg-color)"
                                onClick={() => { }}
                                V_LeftIcon={false}
                                V_LeftIconBG
                                V_Paragraph
                                V_Paragraph2={false}
                                V_Accent={false}
                                V_RightIcon
                                V_BG={false}
                            />
                        </div>
                        <div>
                            <Card
                                Title="제보하기"
                                Paragraph="게임 정보, 환경 등"
                                Paragraph2="Paragraph2"
                                LeftIcon=""
                                LeftIconBG="var(--box-icon-color)"
                                LeftIconImage=""
                                AccentText="Dist"
                                AccentBG="var(--color-dynamic-muse)"
                                RightIcon=""
                                BG="var(--bg-color)"
                                onClick={OpenClick}
                                V_LeftIcon={false}
                                V_LeftIconBG
                                V_Paragraph
                                V_Paragraph2={false}
                                V_Accent={false}
                                V_RightIcon
                                V_BG={false}
                            />
                        </div>
                        <Button Icon='' Title='예약' V_Icon={false}/>
                        <Button Icon='' Title='길찾기' V_Icon={false}/>
                    </div>
                </div>

                <hr/>

                <div className={styles.GroupAlert}>
                    <Alert LeftIcon='' Title='댄스러시 누가 갖다 부숨' Paragraph='오후 9시' V_LeftIcon V_Paragraph/>
                    <Alert LeftIcon='' Title='댄스러시 누가 갖다 부숨' Paragraph='오후 9시' V_LeftIcon V_Paragraph/>
                </div>

                <hr/>

                <div className='SmallGroupContent'> {/* 기체 정보 */}
                    <ContentTitle Title='게임' V_Paragraph={false} Paragraph='Paragraph'/>
                    <div className='SmallGroupCard'>
                    {Object.entries(arcadeData.games)
                        .sort(([key1, game1], [key2, game2]) => game1.Gname.localeCompare(game2.Gname))
                        .map(([key, game]) => (
                        <Card
                            Title={game.Gname}
                            Paragraph={`${game.price}`}
                            Paragraph2=""
                            LeftIcon=""
                            LeftIconBG="var(--box-icon-color)"
                            LeftIconImage=""
                            AccentText={`${game.quantity}`+" 대"}
                            AccentBG="var(--color-dynamic-muse)"
                            RightIcon=""
                            BG="var(--bg-color)"
                            onClick={() => {}}
                            V_LeftIcon={false}
                            V_LeftIconBG
                            V_Paragraph
                            V_Paragraph2
                            V_Accent
                            V_RightIcon={false}
                            V_BG={false}
                        />
                    
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    );
}