import { TextColorOptions } from '@/app/models/global-types';
import styles from './SortHeader.module.css';

/**
 * The functional component for the SortHeader
*/

const SortHeader: React.FC = () => {
  return (
    <div className={styles["sort-header"]}>
      <div className={styles["sort-header__heading"]}>
        <h2 className={TextColorOptions.PRIMARY_BLUE}>Sort it Out!</h2>
      </div>
    </div>
  )
}

export default SortHeader;