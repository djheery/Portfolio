"use client"

import useSortingVisualizer from '../../hooks/useSortingVisualizer';
import { SortItemArray } from '../../models/sort-models';
import SortItemUI from '../SortItem/SortItemUI';
import styles from './SortItemsContainer.module.css';

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

const SortItemsContainer: React.FC<{sortItemArray: () => SortItemArray, tick: number}> = ({sortItemArray, tick}) => {

  return (
    <>
      <div style={{display: "hidden", height: 0, width: 0}}>{tick}</div>
      <div className={styles["sort-items-container"]}>
        {sortItemArray().map((i) => {
          return <SortItemUI itemIdx={i[1]} itemValue={i[0]} key={`${i[0]}-${i[1]}`}/>
        })}
      </div>
    </>
  )
}

export default SortItemsContainer;