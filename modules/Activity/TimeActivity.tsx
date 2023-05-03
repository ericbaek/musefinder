import React from 'react';
import ContentTitle from '@/stories/ContentTitle';
import Dimmed from '@/stories/Dimmed';
import styles from '@/stories/DefaultModal.module.css'
import Exit from '@/stories/Exit';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import { motion } from 'framer-motion';

export default function TimeActivity({onClick}:{onClick:any}) {

    return (
        <>

            <motion.div className={styles.Modal}
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]}}>
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

            </motion.div>

            <Dimmed/>

        </>
    );
}