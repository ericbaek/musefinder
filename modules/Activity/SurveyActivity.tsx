import React from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import ContentTitle from '@/stories/ContentTitle';
import SurveyPicture from '@/stories/SurveyPicture';
import Sort from '@/stories/Sort';
import Textarea from '@/stories/Textarea';
import Dimmed from '@/stories/Dimmed';

export default function Survey() {

    const sort_value = ['', 'arcade_report', 'system_report', 'others'];
    const sort_title = ['유형을 선택해 주세요', '오락실 제보', '시스템 버그', '기타'];

    return (
        <>
            <div className='Survey'>

                <div className='SurveyPicture'>
                    <SurveyPicture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png' Title='제보하기' V_Paragraph Paragraph='버그가 있습니까? 바로 제보해 주세요.'/>
                    <div className='Exit'></div>
                </div>

                <div className='GroupContent'>

                    <div className='SmallGroupContent'>  {/* 필독사항 */}
                        <ContentTitle Title='반드시 읽어주세요' V_Paragraph={false} Paragraph=''/>
                        <div className=''>
                            <Alert V_LeftIcon LeftIcon='' Title='아니 이거는 이렇게 하셔야 하고요' V_Paragraph={false} Paragraph=''/>
                        </div>
                    </div>

                    <hr/>

                    <div className='SmallGroupContent'>  {/* 정렬 */}
                        <ContentTitle Title='유형' V_Paragraph={false} Paragraph=''/>
                        <div className=''>
                            <Sort Value={sort_value} Title={sort_title}/>
                        </div>
                    </div>

                    <hr/>

                    <div className='SmallGroupContent'>  {/* 의견 작성 */}
                        <ContentTitle Title='의견을 작성해 주세요' V_Paragraph Paragraph='사진 올리기'/>
                        <div className=''>
                            <Textarea Placeholder='의견을 작성해 주세요'/>
                        </div>
                    </div>

                    <Button V_Icon={false} Icon='' Title='보내기'/>

                </div>
                
                <style jsx>{`
                    .Exit {
                        z-index: 1000;
                        font-family: var(--font-icon) !important;
                        font-size: 2.4rem;
                        font-weight: 700;
                        cursor: pointer;
                        position: absolute;
                        top: var(--padding-activity);
                        right: var(--padding-activity);
                        opacity: .8;
                        color: white;
                        font-feature-settings: "ss09" on;
                    }

                    .Survey {
                        display: flex;
                        flex-direction: column;
                        background: var(--bg-color);
                        width: 60%;
                        max-width: 960px;
                        height: max-content;
                        max-height: 90%;
                        border-radius: var(--radius-system);
                        position: fixed;
                        padding: var(--padding-activity);
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 900;
                    }

                    @media (max-width: 1279.98px) {
                        .Survey {
                            width: 100%;
                            height: 100%;
                            max-height: 100%;
                            border-radius: 0;
                            left: 0;
                            top: 0;
                            transform: translate(0%, 0%);
                        }
                    }

                    .GroupContent {
                        overflow: scroll;
                    }
                `}</style>

            </div>

            <Dimmed/>
        </>
    );
}