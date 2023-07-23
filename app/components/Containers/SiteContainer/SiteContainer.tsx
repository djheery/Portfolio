import styles from 'SiteContainer.module.css';
import React from 'react';

/**
 * The functional component for SiteContainer
 *
 * @param myParam your params here
*/

const SiteContainer: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <main className={styles["site-container"]}>
      <div className={styles["site-container__inner"]}  >
        {children}
      </div>
    </main>
  )
}

export default SiteContainer;