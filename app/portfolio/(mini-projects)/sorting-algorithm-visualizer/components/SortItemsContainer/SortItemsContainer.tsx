"use client"

import useSortingVisualizer from '../../hooks/useSortingVisualizer';
import SortItemUI from '../SortItem/SortItemUI';
import styles from './SortItemsContainer.module.css';


const SortItemsContainer: React.FC = () => {
  const {
    startSorting, 
    sortItemArray,
    randomise,
  } = useSortingVisualizer();

  return (
    <>
      <div className={styles["sort-items-container"]}>
        {sortItemArray.map((i) => {
          return <SortItemUI itemIdx={i[1]} itemValue={i[0]} key={`${i[0]}-${i[1]}`}/>
        })}
      </div>
      <button onClick={startSorting}>Play</button>
      <button onClick={randomise}>Randomise</button>
    </>
  )
}

export default SortItemsContainer;