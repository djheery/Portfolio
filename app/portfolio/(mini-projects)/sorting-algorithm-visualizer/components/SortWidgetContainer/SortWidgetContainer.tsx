"use client"
import NoSSRWrapper from '@/app/components/Containers/NoSSRWrapper/NoSSRWrapper';
import dynamic from '@/node_modules/next/dynamic';
import { Suspense, useEffect } from 'react';
import SortHeader from '../SortHeader/SortHeader';
import SortItemsContainer from '../SortItemsContainer/SortItemsContainer';
import styles from './SortWidgetContainer.module.css';

/**
 * The functional component for the SortContainer

*/

const SortWidgetContainer: React.FC = () => {
  
  return (
    <div className={styles["sort-container"]}>
      <div className={styles["sort-container__inner"]}>
        <SortHeader />
        <Suspense>
          <NoSSRWrapper>
            <SortItemsContainer />
          </NoSSRWrapper>
        </Suspense>
      </div>
    </div>
  )
}

export default SortWidgetContainer;