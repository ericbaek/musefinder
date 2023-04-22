import React from 'react';
import styles from '@/stories/Search.module.css';
import Search from '@/stories/Search';
import SearchResult from '@/stories/SearchResult';

export default function SearchActivity() {
    return (
        <div className={styles.GroupSearch}>
            <Search LeftIcon='' Placeholder='오락실, 지역 등'/>
            {/* <div className={styles.GroupSearchResult}>
                <SearchResult Icon='' Title='아니씨발'/>
            </div> */}
        </div>
    );
}