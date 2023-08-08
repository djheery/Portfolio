import { PanelOperations } from '../ActionPanel';
import styles from './ActionButton.module.css';

export interface ActionButtonProps {
  name: string, 
  method: () => void,
}

/**
 * The functional component for the ActionButton
 *
 * @param myParam your params here
*/

const ActionButton: React.FC<{action: ActionButtonProps}> = ({action}) => {

  return (
    <div className={styles["action-button__outer"]}>
      <div className={styles["action-button__inner"]}>
        <button onClick={action.method} className={styles["action-button"]}>{action.name}</button>
      </div>
    </div>
  )
}

export default ActionButton;