import React from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import ContentTitle from '@/stories/ContentTitle';
import SurveyPicture from '@/stories/SurveyPicture';
import Sort from '@/stories/Sort';
import Textarea from '@/stories/Textarea';
import Dimmed from '@/stories/Dimmed';
import Exit from '@/stories/Exit';
import {  motion } from "framer-motion";
import styles from '@/stories/SurveyActivity.module.css'

export default function SurveyActivity({onClick}:{onClick:any}) {

    const sort_value = ['', 'arcade_report', 'system_report', 'others'];
    const sort_title = ['유형을 선택하세요', '오락실 제보', '시스템 버그', '기타'];

    return ( 
        <>    

            <motion.div className={styles.Survey}
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]}}>

                <div className='SurveyPicture'>
                    <SurveyPicture Image='https://wallpaperaccess.com/full/1586538.jpg' Title='제보하기' V_Paragraph Paragraph='오락실 관련 정정사항이 있다면 제보 부탁드립니다.'/>
                    <Exit onClick={onClick}/>
                </div>

                <div className='GroupContent'>

                    <div className='SmallGroupContent'>  {/* 필독사항 */}
                        <ContentTitle Title='반드시 읽어주세요' V_Paragraph={false} Paragraph=''/>
                        <div className=''>
                            <Alert V_LeftIcon LeftIcon='' Title='사진의 경우 저작권에 위반되지 않도록 유의하십시오.' V_Paragraph={false} Paragraph=''/>
                            <hr/>
                            <Alert V_LeftIcon LeftIcon='' Title='부적절한 내용 작성 시 익일 해당 IP가 차단될 수 있습니다.' V_Paragraph={false} Paragraph=''/>
                            <hr/>
                            <Alert V_LeftIcon LeftIcon='' Title='제보해 주신 내용은 접수 및 검토 후 빠른 시일 내에 반영됩니다.' V_Paragraph={false} Paragraph=''/>
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

            </motion.div>

            <Dimmed/>
            
        </>
    );
}