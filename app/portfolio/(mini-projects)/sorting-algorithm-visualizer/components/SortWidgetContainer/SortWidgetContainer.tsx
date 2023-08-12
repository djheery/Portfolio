"use client"
import useSortingVisualizer from '../../hooks/useSortingVisualizer';
import SortHeader from '../SortHeader/SortHeader';
import SortItemsContainer from '../SortItemsContainer/SortItemsContainer';
import styles from './SortWidgetContainer.module.css';

/**
 * The functional component for the SortContainer

*/

const SortWidgetContainer: React.FC = () => {
  const {
    sortItemArray,
  } = useSortingVisualizer();

  return (
    <div className={styles["sort-container"]}>
      <div className={styles["sort-container__inner"]}>
        <SortHeader />
        <SortItemsContainer sortItemArray={sortItemArray}/>
      </div>
    </div>
  )
}

export default SortWidgetContainer;