import React, { useRef, useEffect, useState, SetStateAction } from 'react';
import styles from '@/stories/DragActivity.module.css';
import Alert from '@/stories/Alert';
import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import DragPill from '@/stories/DragPill';
import Dragging from '@/modules/Drag';
import Icon from '@/stories/Icon';
import LargeTitle from '@/stories/LargeTitle';
import Picture from '@/stories/Picture';
import Button from '@/stories/Button';
import Theme from '@/stories/Theme';
import { useRouter } from 'next/router';

function Active() {

    /*   */

    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const activityRef = useRef(null);
  
    useEffect(() => {
      if (!isDragging) return;
  
      function handleMouseMove(event: any) {
        if (isDragging) {
            const deltaY = event.clientY - startY;
            const ratio = 1 / (window.innerHeight / 1000); // 액티비티 요소의 높이(100%)와 화면의 높이(800px)에 대한 비율
            setCurrentY(prevY => prevY - deltaY * ratio);
            setStartY(event.clientY);
        }
      }
  
      function handleMouseUp() {
        setIsDragging(false);
      }
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, startY]);
  
    function handleMouseDown(event: { clientY: SetStateAction<number>; }) {
      setIsDragging(true);
      setStartY(event.clientY);
    }

    /*   */

    const router = useRouter();
    const style = {
        bottom: `${currentY}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
    };

    return (
        <>
            <Theme/>
            <div className={styles.DragActivity}
            style={style}
            onMouseDown={handleMouseDown}
            ref={activityRef}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>

                <div className={styles.GroupMap}>
        
                    <div className={styles.GroupPicture}>
                        <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <Picture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                    </div>

                    <div className='GroupContent'>

                        <div className={styles.GroupActiveTitle}>
                            <LargeTitle Title='펀시티 건대점'/>
                            <div className={styles.SmallGroupActiveTitle_Right}>
                                {/* <Icon Icon=''/> */}
                                <Icon Icon=''/>
                                <Icon Icon=''/>
                            </div>
                        </div>

                        <div className='GroupAlert'>
                            <Alert LeftIcon='' Title='댄스러시 누가 갖다 부숨' Paragraph='오후 9시' V_LeftIcon V_Paragraph/>
                        </div>

                        <div className='SmallGroupContent'> 
                             {/* 상세 위치 */}
                            <div className='Grid'> {/* 오픈, 신고 */}
                                <div className='Span-2'>
                                    <Card
                                        Title="서울시 동작구 만양로14가길 26"
                                        Paragraph="건국대 1번출구에서 162m"
                                        Paragraph2="Paragraph2"
                                        LeftIcon=""
                                        LeftIconBG="var(--box-icon-color)"
                                        LeftIconImage=""
                                        AccentText="Dist"
                                        AccentBG="var(--color-dynamic-muse)"
                                        RightIcon=""
                                        BG="var(--bg-color)"
                                        onClick={() => { } }
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
                                    onClick={() => { } }
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
                                    onClick={() => { } }
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

                        <div className='SmallGroupContent'>  {/* 기체 정보 */}
                            <ContentTitle Title='게임' V_Paragraph={false} Paragraph='Paragraph'/>
                            <div className='SmallGroupCard'>
                                <Card
                                    Title="IIDX"
                                    Paragraph="스탠다드 1000원"
                                    Paragraph2="3번 기체"
                                    LeftIcon=""
                                    LeftIconBG="var(--box-icon-color)"
                                    LeftIconImage=""
                                    AccentText="2대"
                                    AccentBG="var(--color-dynamic-muse)"
                                    RightIcon=""
                                    BG="var(--bg-color)"
                                    onClick={() => { } }
                                    V_LeftIcon={false}
                                    V_LeftIconBG
                                    V_Paragraph
                                    V_Paragraph2
                                    V_Accent
                                    V_RightIcon={false}
                                    V_BG={false}
                                />
                                <hr/>
                                <Card
                                    Title="IIDX"
                                    Paragraph="스탠다드 1000원"
                                    Paragraph2="3번 기체"
                                    LeftIcon=""
                                    LeftIconBG="var(--box-icon-color)"
                                    LeftIconImage=""
                                    AccentText="2대"
                                    AccentBG="var(--color-dynamic-muse)"
                                    RightIcon=""
                                    BG="var(--bg-color)"
                                    onClick={() => { } }
                                    V_LeftIcon={false}
                                    V_LeftIconBG
                                    V_Paragraph
                                    V_Paragraph2
                                    V_Accent
                                    V_RightIcon={false}
                                    V_BG={false}
                                />
                                <hr/>
                                <Card
                                    Title="IIDX"
                                    Paragraph="스탠다드 1000원"
                                    Paragraph2="3번 기체"
                                    LeftIcon=""
                                    LeftIconBG="var(--box-icon-color)"
                                    LeftIconImage=""
                                    AccentText="2대"
                                    AccentBG="var(--color-dynamic-muse)"
                                    RightIcon=""
                                    BG="var(--bg-color)"
                                    onClick={() => { } }
                                    V_LeftIcon={false}
                                    V_LeftIconBG
                                    V_Paragraph
                                    V_Paragraph2
                                    V_Accent
                                    V_RightIcon={false}
                                    V_BG={false}
                                />
                                <hr/>
                                <Card
                                    Title="IIDX"
                                    Paragraph="스탠다드 1000원"
                                    Paragraph2="3번 기체"
                                    LeftIcon=""
                                    LeftIconBG="var(--box-icon-color)"
                                    LeftIconImage=""
                                    AccentText="2대"
                                    AccentBG="var(--color-dynamic-muse)"
                                    RightIcon=""
                                    BG="var(--bg-color)"
                                    onClick={() => { } }
                                    V_LeftIcon={false}
                                    V_LeftIconBG
                                    V_Paragraph
                                    V_Paragraph2
                                    V_Accent
                                    V_RightIcon={false}
                                    V_BG={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.Back} onClick={() => {router.push('/main');} }> {/* 백버튼 */}
                <Icon Icon=''/>
            </div>
        </>
    );
}

export default Active;