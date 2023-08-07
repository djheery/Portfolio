"use client"
import { useState } from 'react';
import styles from './EnableSettingButton.module.css';

interface EnableButtonProps {
  settingIsOn: boolean, 
  callback: (isEnabled: boolean) => void;
}

/**
 * The functional component for the EnableSettingButton
 *
 * @param myParam your params here
*/

const EnableSettingButton: React.FC<{buttonSettings: EnableButtonProps}> = ({buttonSettings}) => {

  const [isOn, setIsOn] = useState<boolean>(buttonSettings.settingIsOn);

  const toggleOn = () => {
    if(isOn) return; 
    setIsOn(true);
    buttonSettings.callback(true);
  }

  const toggleOff = () => {
    if(!isOn) return; 
    setIsOn(false); 
    buttonSettings.callback(false);
  }

  let iClass = isOn 
               ? `${styles["indicator-ball--on"]}` 
               : `${styles["indicator-ball--off"]}`

  let indicatorClasses = `
    ${styles["indicator-ball"]}  
    ${iClass}
  `

  return (
    <div className={styles["enable-settings-button"]}>
      <div className={styles["enable-settings-button__inner"]}>
        <span className={indicatorClasses}></span>
        <button className={styles["enable-button"]} onClick={toggleOn}>
          ON
        </button>
        <button className={styles["disable-button"]} onClick={toggleOff}>
          OFF
        </button>
      </div>
    </div>
  )
}

export default EnableSettingButton;