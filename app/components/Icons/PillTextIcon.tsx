import { BackgroundColorOptions, InnerText } from '@/app/models/global-types';
import { TextColorOptions } from '@/app/models/global-types';
import styles from './PillTextIcon.module.css';

/**
 * The functional component for the PillTextIcon
*/

const PillTextIcon: React.FC<{text: InnerText}> = ({text}) => {
  const pillOuterClasses = `
    ${BackgroundColorOptions.WHITE_ACCENT}
    ${styles["pill-text-icon"]}
    fw-bold
  `
  
  return (
    <div className={pillOuterClasses}>
      <div className={styles["pill-text-icon__inner"]}>
        <span className={TextColorOptions.PRIMARY_BLUE}>{text}</span>
      </div>
    </div>
  )
}

export default PillTextIcon;