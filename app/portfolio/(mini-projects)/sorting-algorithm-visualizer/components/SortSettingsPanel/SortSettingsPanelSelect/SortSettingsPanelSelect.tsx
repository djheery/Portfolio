"use client"

import { useState } from 'react';
import { SortOptionItem, SortPanelOptionKeys } from '../../../models/sort-models';
import styles from './SortSettingsPanelSelect.module.css';
import SortSettingsPanelSelectItem, { SelectItemProps } from './SortSettingsPanelSelectItem/SortSettingsPanelSelectItem';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface SortPanelSelectProps {
  options: SortOptionItem[],
  callback: (key: SortPanelOptionKeys) => void
}

/**
 * Describe your Styles
*/

const selectInnerClosedClasslist = `
  ${styles["sort-settings-select__inner"]}
  ${styles["sort-settings-select__inner--closed"]}
`;

const selectDrawClosedClasslist = `
  ${styles["select-draw-container"]}
  ${styles["select-draw-container--closed"]}
`
const selectInnerOpenClasslist = `
  ${styles["sort-settings-select__inner"]}
  ${styles["sort-settings-select__inner--open"]}
`;

const selectDrawOpenClasslist = `
  ${styles["select-draw-container"]}
  ${styles["select-draw-container--open"]}
`


/**
 * The functional component for the SortSettingsPanelSelect
 *
 * @param myParam your params here
*/

const SortSettingsPanelSelect: React.FC<SortPanelSelectProps> = ({options, callback}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const drawStyles = { height: isOpen ? `${0 + (options.length * 24)}px` : `0px` }; 
  const drawClasslist = isOpen ? selectDrawOpenClasslist : selectDrawClosedClasslist
  const selectInnerClasslist = isOpen ? selectInnerOpenClasslist : selectInnerClosedClasslist;
  const current = options.find((o) => o.isSelected);
  const newOptions = options.filter((o) => !o.isSelected);
  
  const openSelectHandler = () => {
    setIsOpen((prevState) => !prevState);
  }

  const changeHandler = (key: SortPanelOptionKeys) => {
    callback(key);
    setIsOpen(false)
  };


  return (
    <div className={styles["sort-settings-select"]}>
      <div className={selectInnerClasslist}>
        <button onClick={openSelectHandler} className={styles["currently-selected-indicator"]}>{current!.textContent}</button>
        <div className={drawClasslist} style={drawStyles}>
          {isOpen && newOptions.map((a, idx) => {
              const props: SelectItemProps = {
                textContent: a.textContent,
                key: a.key, 
                callback: changeHandler,
                isSelected: a.isSelected,
                idx: idx,
              }
  
              return <SortSettingsPanelSelectItem selectItemProps={props} key={`sort-select-item-${idx}`}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default SortSettingsPanelSelect;