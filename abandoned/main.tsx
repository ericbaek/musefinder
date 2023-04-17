import React from 'react';
import Alert from '@/stories/Alert';
import Card from '@/stories/Card'
import AccountIcon from '@/stories/AccountIcon';
import ContentTitle from '@/stories/ContentTitle';
import LargeTitle from '@/stories/LargeTitle';
import NearData from '@/modules/neardata';
import Promotion from '@/stories/Promotion';
import Search from '@/stories/Search';
import PictureMenu from '@/stories/PictureMenu';

function Main() {

    return (
        <>

            <div className='GroupTitle'>
                <div className='Account-GroupTitle'>
                    <LargeTitle Title='뮤즈파인더'/>
                    <AccountIcon Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                </div>
                <Search LeftIcon='' Input='리듬게임, 오락실 검색' RightIcon=''/>
            </div>

            <div className='GroupContent'>

                <div className='SmallGroupContent'>  {/* 저장한 장소 */}
                    <ContentTitle Title='저장' V_Paragraph Paragraph='수정'/>
                    <div className='Grid'>
                        <Card
                            Href="/"
                            Title="IIDX"
                            Paragraph="코나미"
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

                        <Card
                            Href="/"
                            Title="IIDX"
                            Paragraph="코나미"
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

                        <Card
                            Href="/"
                            Title="펀시티 건대점"
                            Paragraph="② ⑦ 건대입구역"
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
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 빠르게 찾기 */}
                    <ContentTitle Title='빠르게 찾기' V_Paragraph={false} Paragraph='Paragraph'/>
                    <div className='Grid'>
                        <PictureMenu Href='/company/company' Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <PictureMenu Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <PictureMenu Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                        <PictureMenu Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 근처 오락실 */}
                    <ContentTitle Title='주변 오락실' V_Paragraph={false} Paragraph='Paragraph'/>
                    <Alert V_LeftIcon={true} LeftIcon='' Title='차라리 일본이 더 가깝겠는데요?' V_Paragraph={false} Paragraph='Paragraph'/>
                    <NearData latitude={latitude} longitude={longitude} FilterList={FilterList}/>
                </div>

                <hr/>

                <div className='SmallGroupContent'>
                    <Promotion Title='뮤즈파인더를 만들게 된 계기' V_Paragraph={false} Paragraph='테크클립 제작' Distribute={'Start'} Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png'/>
                    <Card
                        Href="/"
                        Title="의견 남기기"
                        Paragraph="Paragraph"
                        Paragraph2="Paragraph2"
                        LeftIcon=""
                        LeftIconBG="var(--box-icon-color)"
                        LeftIconImage=""
                        AccentText="Dist"
                        AccentBG="var(--color-dynamic-muse)"
                        RightIcon=""
                        BG="var(--bg-color)"
                        onClick={() => { } }
                        V_LeftIcon
                        V_LeftIconBG
                        V_Paragraph={true}
                        V_Paragraph2={false}
                        V_Accent={false}
                        V_RightIcon={false}
                        V_BG={false}
                    />
                </div>

            </div>


            
        </>
    );
}

export default Main;