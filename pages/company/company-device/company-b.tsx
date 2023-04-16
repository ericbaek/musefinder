import React from 'react';
import Card from '@/stories/Card'
import ContentTitle from '@/stories/ContentTitle';
import LargeTitle from '@/stories/LargeTitle';
import NearData from '@/modules/neardata';

function Main() {

    return (
        <>

            <div className='GroupTitle'>
                <LargeTitle Title='비트매니아 IIDX'/>
            </div>

            <div className='GroupContent'>

                <div className='SmallGroupContent'>  {/* 포털 */}
                    <ContentTitle Href='/' Title='바로가기' V_Paragraph={false} Paragraph=''/>
                    <div className='Grid'>
                        <Card
                            Href="/"
                            Title="공식 사이트"
                            Paragraph="Paragraph"
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
                            V_Paragraph={false}
                            V_Paragraph2={false}
                            V_Accent={false}
                            V_RightIcon={false}
                            V_BG={false}
                        />
                        <Card
                            Href="/"
                            Title="뉴스 및 업데이트"
                            Paragraph="Paragraph"
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
                            V_Paragraph={false}
                            V_Paragraph2={false}
                            V_Accent={false}
                            V_RightIcon={false}
                            V_BG={false}
                        />
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 가이드 */}
                    <ContentTitle Href='/' Title='가이드' V_Paragraph Paragraph='더보기'/>
                    <div className='Grid'>
                        <Card
                            Href="/"
                            Title="SP 손배치"
                            Paragraph="리겜고수"
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
                            Title="DP 정배치"
                            Paragraph="ㅇㅇ"
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

                <div className='SmallGroupContent'>  {/* 근처 오락실 */}
                    <ContentTitle Href='/map' Title='주변 오락실' V_Paragraph Paragraph='더보기'/>
                    <NearData/>
                </div>

            </div>


            
        </>
    );
}

export default Main;