import React from 'react';
import DragPill from '@/stories/DragPill';
import Filter from '@/stories/Filter';
import NearData from '@/modules/neardata';
import Search from '@/stories/Search';
import styles from '@/stories/Map.module.css'

function Main() {

    return (
        <>
            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                
                <div className={styles.GroupMap}>

                    <div className={styles.SmallGroupMapSearch}>
                        <Search LeftIcon='' Input='리듬게임, 오락실 검색' RightIcon=''/>{/* 검색창 */}
                        <div className='GroupFilter'>
                            <Filter Href='/' Title='IIDX 라이트닝' onClick={function (_title: string): void {
                                throw new Error('Function not implemented.');
                            } }/> {/* 필터 */}
                        </div>
                    </div>

                    <div className='SmallGroupContent'>  {/* 근처 오락실 */}
                        <NearData/>
                    </div>

                </div>
            </div>
            
        </>
    );
};

export default Main;