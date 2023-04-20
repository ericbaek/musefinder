import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';
import Search from '@/stories/Search';

export default function Main() {
    
    return (
        <>
            <Search LeftIcon='' Placeholder='오락실, 지역 등'/>
            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <MapActivity/>
            </div>
            
        </>
    );
}