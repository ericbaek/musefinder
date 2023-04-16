import React from 'react';
import Button from '@/stories/Button';
import Card from '@/stories/Card'
import ContentTitle from '@/stories/ContentTitle';

function Modal() {

    return (
        <>

            <div className='Modal'>

                <div className='SmallGroupContent'>
                    <ContentTitle Href='' Title='Title' V_Paragraph={false} Paragraph='Paragraph'/>
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
                        /> {/* 저장한 장소 카드 */}
                    </div>
                </div>

                <Button Href='' V_Icon={false} Icon='' Title='Title'/>

            </div>

            <div className='dimmed'/>
            
        </>
    );
}

export default Modal;