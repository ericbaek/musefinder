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
import TimeActivity from './TimeActivity';
import SystemNotification from '@/stories/SystemNotification';

interface Props {
arcadeID: string
}

interface ArcadeData {
    name: string;
    address: string;
    address_tube: string;
    games: Record<string, { Gname: string; quantity: number; price: string; note: string}>;

}

export default function ActiveActivity({ arcadeID }: Props) {
    const [arcadeData, setArcadeData] = useState<ArcadeData | null>(null);
    const [showSurvey, setShowSurvey] = useState(false);
    const [showTimeModal, setShowTimeModal] = useState(false);

    
    function OpenSurvey() {
        setShowSurvey(true);
    }

    function CloseSurvey() {
        setShowSurvey(false);
    }

    function OpenTimeModal() {
        setShowTimeModal(true);
    }

    function CloseTimeModal() {
        setShowTimeModal(false);
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
      return <Alert LeftIcon='' Title='비정상적인 접근입니다.' V_LeftIcon V_Paragraph={false} Paragraph={''}/>;
    }
  
    if (!arcadeData) {
      return <Alert LeftIcon='' Title='잠시만 기다려 주세요.' V_LeftIcon V_Paragraph={false} Paragraph={''}/>;
    }

    console.log(arcadeData);


    return (
        <>

            {showSurvey && <SurveyActivity onClick={CloseSurvey} />}
            {showTimeModal && <TimeActivity onClick={CloseTimeModal} />}

            {/* <div className={styles.GroupPicture}>
                <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
            </div> */}

            <div className='GroupContent'>

                <div className={styles.GroupActiveTitle}>
                    <LargeTitle Title={arcadeData.name}/>
                    <div className={styles.SmallGroupActiveTitle_Right}>
                        {/* <Icon Icon=''/> */}
                        <Icon Icon='' onClick={()=>{ }}/>
                    </div>
                </div>

                <div className='SmallGroupContent'> 
                    {/* 상세 위치 */}
                    <div className='Grid'> {/* 오픈, 신고 */}
                        <div className='Span-2'>
                            <Card
                                Title={arcadeData.address}
                                Paragraph={arcadeData.address_tube}
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
                                onClick={OpenTimeModal}
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
                                onClick={OpenSurvey}
                                V_LeftIcon={false}
                                V_LeftIconBG
                                V_Paragraph
                                V_Paragraph2={false}
                                V_Accent={false}
                                V_RightIcon
                                V_BG={false}
                            />
                        </div>
                        <Button Icon='' Title='기체 대여' V_Icon={false}/>
                        <Button Icon='' Title='길찾기' V_Icon={false}/>
                    </div>
                </div>

                <hr/>

                <div className={styles.GroupAlert}>
                    <Alert LeftIcon='' Title='댄스러시 누가 갖다 부숨' Paragraph='오후 9시' V_LeftIcon V_Paragraph/>
                    <hr/>
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