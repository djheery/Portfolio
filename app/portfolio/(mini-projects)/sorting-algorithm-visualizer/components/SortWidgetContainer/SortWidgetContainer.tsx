"use client"
import useSortingVisualizer from '../../hooks/useSortingVisualizer';
import { SettingsPanelItem } from '../../models/sort-models';
import SortHeader from '../SortHeader/SortHeader';
import SortItemsContainer from '../SortItemsContainer/SortItemsContainer';
import styles from './SortWidgetContainer.module.css';

/**
 * The functional component for the SortContainer

*/

const SortWidgetContainer: React.FC = () => {
  const {
    sortItemArray,
    actions
  } = useSortingVisualizer();

  return (
    <div className={styles["sort-container"]}>
      <div className={styles["sort-container__inner"]}>
        <SortHeader actions={actions} />
        <SortItemsContainer sortItemArray={sortItemArray}/>
      </div>
    </div>
  )
}

export default SortWidgetContainer;