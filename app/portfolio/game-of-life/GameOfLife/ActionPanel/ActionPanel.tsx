import { ObjectValues } from '@/app/models/global-types';
import React from 'react';
import ActionButton, { ActionButtonProps } from './ActionButton/ActionButton';
import styles from './ActionPanel.module.css';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export const ActionNames = {
  PAUSE: "PAUSE", 
  START: "START", 
  STEP: "STEP",
  RANDOM: "RANDOM", 
  RANGE: "RANGE",
} as const; 

/**
 * A type for...
 *
*/

export type ActionName = ObjectValues<typeof ActionNames>

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface PanelOperations {
  [ActionNames.PAUSE]: () => void, 
  [ActionNames.START]: () => void, 
  [ActionNames.STEP]: () => void, 
  [ActionNames.RANDOM]: () => void, 
  [ActionNames.RANGE]: () => void, 
}

/**
 * Create the JSX elements for the Panel Buttons.
 *
 * @param operations The an object of operations to be transfered to the each button
*/

const createPanelButtons = (operations: PanelOperations): JSX.Element[] => { 
  const itemArray = []; 

  for(const action in operations) {
    const a = action as ActionName
    const buttonObject: ActionButtonProps = { 
      name: action.toLowerCase() as string,
      method: operations[a] 
    };

    itemArray.push((
      <ActionButton key={`${action}`} action={buttonObject} />
    )); 
  }
  
  return itemArray;
}

/**
 * The functional component for the ActionPanel
 *
 * @param operations The an object of operations to be transfered to the each button
*/

const ActionPanel: React.FC<{operations: PanelOperations}> = React.memo(({ operations }) => {
  const panelButtons = createPanelButtons(operations);
  
  return (
    <div className={styles["action-panel"]}>
      <div className={styles["action-panel__inner"]}>
        {panelButtons.map((b) => b)}
      </div>
    </div>
  )
})

export default ActionPanel;