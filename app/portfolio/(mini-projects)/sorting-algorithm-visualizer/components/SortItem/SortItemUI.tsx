import styles from './SortItemUI.module.css';

export interface SortItemProps {
  index: number, 
  width: number,
  height: number,
}

/**
 * The functional component for the SortItemUI
 *
 * @param myParam your params here
*/

const SortItemUI: React.FC<{itemInfo: SortItemProps}> = ({itemInfo}) => {
  const itemStyles = {
    width: `${itemInfo.width}px`, 
    height: `${itemInfo.height}%`,
    left: 0 + ((itemInfo.index * itemInfo.width)), 
  }

  return (
    <div 
      className={styles["sort-item"]} 
      suppressHydrationWarning
      style={itemStyles}
    >
      {itemInfo.width >= 3 && <div className={styles["sort-item__inner"]}></div>}
    </div>
  )
}

export default SortItemUI;