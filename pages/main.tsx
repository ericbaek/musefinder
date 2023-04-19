import MapActivity from '@/modules/Activity/MapActivity';
import styles from '@/stories/DragActivity.module.css'
import DragPill from '@/stories/DragPill';

export default function Main() {
    
    return (
        <>
            <div className={styles.DragActivity}>
                <div className={styles.Drag}> {/* 드래그 */}
                    <DragPill/>
                </div>
                <MapActivity/>
            </div>
            
        </>
    );
}