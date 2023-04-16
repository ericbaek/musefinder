import React from 'react';
import Card from '@/stories/Card'
import Tab from '@/stories/Tab';

function Main() {

    return (
        <>

            <div className=''>
                 <div className='SmallGroupTab row'>
                    <Tab Href='/' Title='전체'/>
                    <Tab Href='/' Title='라이트닝 기체'/>
                 </div>
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
                    V_LeftIcon={false}
                    V_LeftIconBG
                    V_Paragraph
                    V_Paragraph2={false}
                    V_Accent
                    V_RightIcon={false}
                    V_BG={false}
                />
            </div>

        </>
    );
}

export default Main;