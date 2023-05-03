import React from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import ContentTitle from '@/stories/ContentTitle';
import SurveyPicture from '@/stories/SurveyPicture';
import Sort from '@/stories/Sort';
import Textarea from '@/stories/Textarea';
import Dimmed from '@/stories/Dimmed';

export default function Survey({onClick}:{onClick:any}) {

    const sort_value = ['', 'arcade_report', 'system_report', 'others'];
    const sort_title = ['유형을 선택하세요', '오락실 제보', '시스템 버그', '기타'];

    return (
        <>
            <div className='Survey'>

                <div className='SurveyPicture'>
                    <SurveyPicture Image='https://wallpaperaccess.com/full/1586538.jpg' Title='제보하기' V_Paragraph Paragraph='오락실 관련 정정사항이 있다면 제보 부탁드립니다.'/>
                    <div className='Exit' onClick={onClick}></div>
                </div>

                <div className='GroupContent'>

                    <div className='SmallGroupContent'>  {/* 필독사항 */}
                        <ContentTitle Title='반드시 읽어주세요' V_Paragraph={false} Paragraph=''/>
                        <div className=''>
                            <Alert V_LeftIcon LeftIcon='' Title='저작권에 위반되지 않도록 유의하십시오.' V_Paragraph={false} Paragraph=''/>
                        </div>
                    </div>

                    <hr/>

                {/*
                    <div className='SmallGroupContent'>
                        <ContentTitle Title='유형' V_Paragraph={false} Paragraph=''/>
                        <div className=''>
                            <Sort Value={sort_value} Title={sort_title}/>
                        </div>
                    </div>

                    <hr/>
                */}

                    <div className='SmallGroupContent'>  {/* 의견 작성 */}
                        <ContentTitle Title='내용' V_Paragraph Paragraph='사진 올리기'/>
                        <div className=''>
                            <Textarea Placeholder='내용을 입력하세요'/>
                        </div>
                    </div>

                    <Button V_Icon={false} Icon='' Title='보내기'/>

                </div>
                
                <style jsx>{`
                    .Survey {
                        display: flex;
                        flex-direction: column;
                        background: var(--bg-color);
                        width: 40%;
                        min-width: 728px;
                        max-width: 960px;
                        height: max-content;
                        max-height: 90%;
                        border-radius: var(--radius-activity);
                        position: fixed;
                        padding: calc(var(--padding-activity) * 1.5);
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 9000;
                        gap: calc(var(--padding-activity) * 1.2);
                    }

                        .Exit {
                            z-index: 1000;
                            font-family: var(--font-icon) !important;
                            font-size: 2.8rem;
                            font-weight: 700;
                            cursor: pointer;
                            position: absolute;
                            top: var(--padding-activity);
                            right: var(--padding-activity);
                            color: white;
                            font-feature-settings: "ss09" on;
                        }

                    @media (max-width: 767.98px) {
                        .Survey {
                            width: 100%;
                            max-width: 100%;
                            height: 100%;
                            max-height: 100%;
                            border-radius: 0;
                            left: 0;
                            top: 0;
                            transform: translate(0%, 0%);
                            padding: var(--padding-activity);
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