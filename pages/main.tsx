import { useState } from 'react';
import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import ActiveActivity from '@/modules/Activity/ActiveActivity';
import SearchActivity from '@/modules/SearchActivity';


export default function Main() {
    const [showActive, setShowActive] = useState(true);

    function handleCardClick() {
      setShowActive(true);
    }

    function handleBackClick() {
        setShowActive(false);
      }
    
    return (
        <>
            <SearchActivity/>
            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <MapActivity/>
            </div>
            
        </>
    );
}