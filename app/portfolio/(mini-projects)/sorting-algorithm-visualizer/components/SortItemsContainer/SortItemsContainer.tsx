import SortItem from '../../models/SortItem';
import SortItemUI, { SortItemProps } from '../SortItem/SortItemUI';
import styles from './SortItemsContainer.module.css';

const getArr = () => {
  let arr = [];
  
  for(let i = 0; i < 100; i++) {
    arr.push(Math.random());
  }

  return arr; 
}

/**
 * The functional component for the SortItemsContainer
 *
 * @param myParam your params here
*/

const SortItemsContainer: React.FC = () => {
  
  
  return (
    <div className={styles["sort-items-container"]}>
      {getArr().map((i: number, idx) => {
        const num =i
        const itemInfo: SortItemProps = {
          index: idx, 
          width: 4,
          height: num * 100
        }

        return <SortItemUI itemInfo={itemInfo} />
      })}
    </div>
  )
}

export default SortItemsContainer;