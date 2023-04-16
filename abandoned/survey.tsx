import React from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import ContentTitle from '@/stories/ContentTitle';
import PhotoTitle from '@/stories/PhotoTitle';
import Sort from '@/stories/Sort';
import Textarea from '@/stories/Textarea';

function Survey() {

    return (
        <>

            <PhotoTitle/>

            <div className='GroupContent'>

                <div className='SmallGroupContent'>  {/* 필독사항 */}
                    <ContentTitle/>
                    <div className=''>
                        <Alert/>
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 정렬 */}
                    <ContentTitle/>
                    <div className=''>
                        <Sort/>
                    </div>
                </div>

                <hr/>

                <div className='SmallGroupContent'>  {/* 의견 작성 */}
                    <ContentTitle/>
                    <div className=''>
                        <Textarea/>
                    </div>
                </div>

                <Button/>

            </div>
            
        </>
    );
}

export default Survey;