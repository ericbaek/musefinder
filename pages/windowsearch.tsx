import React from 'react';
import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import Search from '@/stories/Search';

function WindowSearch() {

    return (
        <>
            <Search LeftIcon='' Placeholder='오락실 검색' RightIcon='' V_RightIcon={true}/>

            <div className='GroupSearchResult'>

                <div className='SmallGroupContent'>  {/* 오락실 위치 */}
                    <ContentTitle Href='/' Title='오락실' V_Paragraph={false} Paragraph=''/>
                    <div className=''>
                        <Card
                        Href="/"
                        Title="Title"
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
                        V_LeftIcon
                        V_LeftIconBG
                        V_Paragraph
                        V_Paragraph2={false}
                        V_Accent
                        V_RightIcon={false}
                        V_BG={false}
                    />
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 일반 기체 */}
                    <ContentTitle Href='/' Title='오락실 기체' V_Paragraph={false} Paragraph=''/>
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
                    <ContentTitle Href='/' Title='코나스테' V_Paragraph={false} Paragraph=''/>
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

            <div className='dimmed'/>
            
        </>
    );
};

export default WindowSearch;