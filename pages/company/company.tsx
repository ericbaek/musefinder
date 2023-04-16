import React from 'react';
import Card from '@/stories/Card'
import ContentTitle from '@/stories/ContentTitle';
import LargeTitle from '@/stories/LargeTitle';

function Main() {

    return (
        <>

            <div className='GroupTitle'>
                <LargeTitle Title='코나미'/>
            </div>

            <div className='GroupContent'>

                <div className='SmallGroupContent'>  {/* 일반 기체 */}
                    <ContentTitle Href='' Title='오락실 기체' V_Paragraph={false} Paragraph='Paragraph'/>
                    <div className=''>
                        <Card
                            Href="/"
                            Title="IIDX"
                            Paragraph="Paragraph"
                            Paragraph2="Paragraph2"
                            LeftIcon=""
                            LeftIconBG="var(--box-icon-color)"
                            LeftIconImage=""
                            AccentText="Dist"
                            AccentBG="var(--color-dynamic-muse)"
                            RightIcon=""
                            BG="var(--bg-color)"
                            onClick={() => { } }
                            V_LeftIcon
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

                <div className='SmallGroupContent'>  {/* 코나스테 */}
                    <ContentTitle Href='' Title='코나스테' V_Paragraph={false} Paragraph='Paragraph'/>
                    <div className=''>
                        <Card
                            Href="/"
                            Title="IIDX"
                            Paragraph="Paragraph"
                            Paragraph2="Paragraph2"
                            LeftIcon=""
                            LeftIconBG="var(--box-icon-color)"
                            LeftIconImage=""
                            AccentText="Dist"
                            AccentBG="var(--color-dynamic-muse)"
                            RightIcon=""
                            BG="var(--bg-color)"
                            onClick={() => { } }
                            V_LeftIcon
                            V_LeftIconBG
                            V_Paragraph={false}
                            V_Paragraph2={false}
                            V_Accent={false}
                            V_RightIcon={false}
                            V_BG={false}
                        />
                    </div>
                </div>

            </div>


            
        </>
    );
}

export default Main;