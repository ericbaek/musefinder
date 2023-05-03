import React from 'react';
import ContentTitle from '@/stories/ContentTitle';
import Dimmed from '@/stories/Dimmed';
import styles from '@/stories/DefaultModal.module.css'
import Exit from '@/stories/Exit';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';

export default function TimeActivity({onClick}:{onClick:any}) {

    return (
        <>

            <div className={styles.Modal}>
                <div className='SmallGroupContent'>
                    <ContentTitle Title='영업 시간' V_Paragraph={false} Paragraph='Paragraph'/>
                    <div className='GroupAlert'>
                        <Alert Title='일요일' Paragraph='07:00 - 05:00' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                        <hr/>
                        <Alert Title='월요일' Paragraph='07:00 - 05:00' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                        <hr/>
                        <Alert Title='화요일' Paragraph='07:00 - 05:00' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                        <hr/>
                        <Alert Title='수요일' Paragraph='07:00 - 05:00' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                        <hr/>
                        <Alert Title='목요일' Paragraph='07:00 - 05:00' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                        <hr/>
                        <Alert Title='금요일' Paragraph='07:00 - 05:00' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                        <hr/>
                        <Alert Title='토요일' Paragraph='휴무' V_LeftIcon={false} LeftIcon='' V_Paragraph/>
                    </div>
                </div>
                <Button V_Icon={false} Icon='' Title='닫기' onClick={onClick}/>
                <style jsx>{`
                    .GroupAlert {
                        display: flex;
                        flex-direction: column;
                    }
                `}</style>

            </div>

            <Dimmed/>

        </>
    );
}