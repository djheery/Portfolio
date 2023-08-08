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
        <SortItemsContainer />
      </div>
    </div>
  )
}

export default SortWidgetContainer;