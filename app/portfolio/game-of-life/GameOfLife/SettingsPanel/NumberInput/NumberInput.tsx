import { inputDebounce } from '@/app/util/debounce';
import { useRef, useState } from 'react';
import GameOfLifeUtil from '../../util/GameOfLifeUtil';
import styles from './NumberInput.module.css';

export interface NumberInputSettings {
  name: string, 
  min: number, 
  max: number, 
  value: number,
  step: number, 
  flag?: string,
  default: number,
  callback: (newValue: number) => void 
}
/**
 * The functional component for the NumberInput
*/

const NumberInput: React.FC<{inputSettings: NumberInputSettings}> = ({inputSettings}) => {
  const [isError, setIsError] = useState<boolean>(false); 

  const outerClasses = `
    ${styles["number-input__outer"]} 
    ${isError ? `${styles["input-error"]}` : ""}
  `
  
  const inputRef = useRef<HTMLInputElement>(null);
  let defaultValue = inputSettings.value; 

  const increment = () => {
    const inputCurrent = inputRef!.current! as any;
    const isInvalid = GameOfLifeUtil.numberIsValid(
      inputSettings.min, 
      inputSettings.max, 
      parseInt(inputCurrent.value) + 1
    );  

    if(isInvalid) return; 
    inputCurrent.value++; 
    inputSettings.callback(parseInt(inputCurrent.value));
  }; 
  
  const decrement = () => {
    const inputCurrent = inputRef!.current! as any;
    const isInvalid = GameOfLifeUtil.numberIsValid(
      inputSettings.min, 
      inputSettings.max, 
      parseInt(inputCurrent.value) - 1
    );  

    if(isInvalid) return; 
    inputCurrent.value--;
    inputSettings.callback(parseInt(inputCurrent.value));
  };

  const onValueChange = () => {
    const inputCurrent = inputRef!.current! as any;
    if(inputCurrent.value.trim() === "") {  
      setIsError(true);
      return
    }; 


    if(isNaN(inputCurrent.value)) {
      inputCurrent.value = inputSettings.default; 
      inputSettings.callback(inputSettings.default)
      return
    } 

    const isInvalid = GameOfLifeUtil.numberIsValid(
      inputSettings.min, 
      inputSettings.max, 
      parseInt(inputCurrent.value)
    );  

    if(isInvalid) {
      setIsError(true);
      return; 
    }; 

    inputSettings.callback(parseInt(inputCurrent.value));
    isError ? setIsError(false) : null;
  }
 
  return (
    <div className={outerClasses}>
      <div className={styles["number-input__inner"]}>
        <input 
          type="number" 
          className={styles["number-input"]} 
          ref={inputRef}
          name={inputSettings.name}
          max={inputSettings.max}
          min={inputSettings.min}
          defaultValue={defaultValue}
          step={inputSettings.step} 
          onKeyUp={onValueChange}
        />
        <span className={styles["input-flag"]}>{inputSettings.flag}</span>
        <button onClick={increment} className={styles["spinner-up"]}></button>
        <button onClick={decrement} className={styles["spinner-down"]}></button>
      </div>
    </div>
  )
}

export default NumberInput;