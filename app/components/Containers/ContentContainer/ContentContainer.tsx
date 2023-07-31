import { PropsWithChildren } from 'react';
import styles from './ContentContainer.module.css';

/**
 * The functional component for the ContentContainer
*/

const ContentContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <section className={styles["content-container"]}>
      {children}
    </section>
  )
}

export default ContentContainer;