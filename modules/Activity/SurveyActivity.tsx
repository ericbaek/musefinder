import React from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import ContentTitle from '@/stories/ContentTitle';
import SurveyPicture from '@/stories/SurveyPicture';

export default function Survey() {

    return (
        <>

            <SurveyPicture Image='https://go.develoid.net/gate/bestphoto/BESTPHOTO.png' Title='제보하기' V_Paragraph Paragraph='버그가 있습니까? 바로 제보해 주세요.'/>

            <div className='GroupContent'>

                <div className='SmallGroupContent'>  {/* 필독사항 */}
                    <ContentTitle Title='반드시 읽어주세요' V_Paragraph={false} Paragraph=''/>
                    <div className=''>
                        <Alert V_LeftIcon LeftIcon='' Title='- 아니 이거는 이렇게 하셔야 하고요 
                        - 이거는 이렇게 하셔야 해요' V_Paragraph={false} Paragraph=''/>
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 정렬 */}
                    <ContentTitle Title='유형' V_Paragraph={false} Paragraph=''/>
                    <div className=''>
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 의견 작성 */}
                    <ContentTitle Title='의견을 작성해 주세요' V_Paragraph Paragraph='사진'/>
                    <div className=''>
                    </div>
                </div>

                <Button V_Icon={false} Icon='' Title='보내기'/>

            </div>
            
        </>
    );
}