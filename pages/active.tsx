import React from 'react';
import styles from '@/stories/DragActivity.module.css';
import Alert from '@/stories/Alert';
import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import DragPill from '@/stories/DragPill';
import Icon from '@/stories/Icon';
import LargeTitle from '@/stories/LargeTitle';
import Picture from '@/stories/Picture';
import Button from '@/stories/Button';
import Theme from '@/stories/Theme';

function Active() {
    return (
        <>
            <Theme/>
            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>

                <div className={styles.GroupMap}>
        
                    <div className={styles.GroupPicture}>
                        <Picture Href='/' Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <Picture Href='/' Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <Picture Href='/' Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                    </div>

                    <div className='GroupContent'>

                        <div className={styles.GroupActiveTitle}>
                            <LargeTitle Title='펀시티 건대점'/>
                            <div className={styles.SmallGroupActiveTitle_Right}>
                                <Icon Href='/' Icon=''/>
                                <Icon Href='/' Icon=''/>
                                <Icon Href='/' Icon=''/>
                            </div>
                        </div>

                        <div className='GroupAlert'>
                            <Alert Href='/' LeftIcon='' Title='댄스러시 누가 갖다 부숨' Paragraph='오후 9시' V_LeftIcon V_Paragraph/>
                        </div>

                        <div className='SmallGroupContent'> 
                             {/* 상세 위치 */}
                            <div className='Grid'> {/* 오픈, 신고 */}
                                <div className='Span-2'>
                                    <Card
                                        Href="/"
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
                                <Card
                                    Href="/"
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
                                <Card
                                    Href="/"
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
                                <Button Href='' Icon='' Title='예약' V_Icon={false}/>
                                <Button Href='/map' Icon='' Title='길찾기' V_Icon={false}/>
                            </div>
                        </div>

                        <hr/>

                        <div className='SmallGroupContent'>  {/* 기체 정보 */}
                            <ContentTitle Href='/' Title='게임' V_Paragraph={false} Paragraph='Paragraph'/>
                            <div className='SmallGroupCard'>
                                <Card
                                    Href="/"
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
                                    Href="/"
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
                                    Href="/"
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
                                    Href="/"
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
                                    Href="/"
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
                                    Href="/"
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
                                    Href="/"
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
            
            <div className={styles.Back}> {/* 백버튼 */}
                <Icon Href='/' Icon=''/>
            </div>
        </>
    );
}

export default Active;