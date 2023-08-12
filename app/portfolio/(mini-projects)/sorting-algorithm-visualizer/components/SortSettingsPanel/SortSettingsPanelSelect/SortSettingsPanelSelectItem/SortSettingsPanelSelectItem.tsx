import { SortPanelOptionKeys } from '../../../../models/sort-models';
import styles from './SortSettingsPanelSelectItem.module.css';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface SelectItemProps {
  isSelected: boolean,
  textContent: string,
  key: SortPanelOptionKeys,
  callback: (ekey: SortPanelOptionKeys) => void,
  idx: number,
}

/**
 * The functional component for the SortSettingsPanelSelectItem
 *
 * @param myParam your params here
*/

const SortSettingsPanelSelectItem: React.FC<{selectItemProps: SelectItemProps}> = ({selectItemProps}) => {
  const dynamicStyles = {
    top: `${0 + (selectItemProps.idx * 27)}px`
  }

  const clickHandler = () => {
    selectItemProps.callback(selectItemProps.key);
  }
  
  return (
    <button onClick={clickHandler} role="button" className={styles["select-item"]} style={dynamicStyles}>
      <span className={styles["select-item__text"]}>{selectItemProps.textContent}</span>
      {selectItemProps.isSelected && <span className={styles["tick"]}>  &#10003;</span>}
    </button>
  )
}

export default SortSettingsPanelSelectItem;