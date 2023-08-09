"use client"

import SortingAlgorithmDriver from '../../models/SortingAlgorithmDriver';
import SortItem from '../../models/SortItem';
import SortItemUI from '../SortItem/SortItemUI';
import styles from './SortItemsContainer.module.css';


/**
 * The functional component for the SortItemsContainer
 *
 * @param myParam your params here
*/

const SortItemsContainer: React.FC = () => {
  const SortDriver = new SortingAlgorithmDriver(); 
  const itemArray: SortItem[] = SortDriver.getSortItems();
  
  return (
    <>
      <div className={styles["sort-items-container"]}>
        {itemArray.map((i, idx) => {
          return <SortItemUI key={idx} item={i} />
        })}
      </div>
      <button onClick={SortDriver.startSort.bind(SortDriver)}>Play</button>
    </>
  )
}

export default SortItemsContainer;