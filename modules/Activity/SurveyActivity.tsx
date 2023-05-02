import React from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import ContentTitle from '@/stories/ContentTitle';
import SurveyPicture from '@/stories/SurveyPicture';

export default function Survey() {

    return (
        <div className='Survey'>

            <div className='Container'>

                <SurveyPicture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png' Title='제보하기' V_Paragraph Paragraph='버그가 있습니까? 바로 제보해 주세요.'/>

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
                            <Sort/>
                        </div>
                    </div>

                    <hr/>

                    <div className='SmallGroupContent'>  {/* 의견 작성 */}
                        <ContentTitle Title='의견을 작성해 주세요' V_Paragraph Paragraph='사진'/>
                        <div className=''>
                            <Textarea/>
                        </div>
                    </div>

                    <Button V_Icon={false} Icon='' Title='보내기'/>

                </div>

            </div>
            
        <style jsx>{`
            .Survey {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 100%;
                position: fixed;
                padding: var(--padding-activity);
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 900;
            }

            .Container {
                background: var(--bg-color);
                width: 100%;
            }

            @media (min-width: 1280px) {
                .Survey {
                    top: 5vh;
                    height: 90vh;
                }

                .Container {
                    width: 960px;
                    padding: var(--padding-activity);
                    border-radius: var(--radius-activity);
                }
            }

            @media (max-width: 1279.98px) {
                .Survey {
                    background: var(--bg-color);
                }
            }

            .GroupContent {
                
            }
        `}</style>
        </div>
    );
}