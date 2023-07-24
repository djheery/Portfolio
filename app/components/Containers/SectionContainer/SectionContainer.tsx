import { PropsWithChildren } from 'react';
import styles from './SectionContainer.module.css';

/**
 * The functional component for the SectionContainer
*/

const SectionContainer: React.FC<PropsWithChildren> = ({children}) => {
  const sectionContainerClasses = `${styles["section-container"]} pos-r`

  return (
    <div className={sectionContainerClasses}>
      {children}
    </div>
  )
}

export default SectionContainer;