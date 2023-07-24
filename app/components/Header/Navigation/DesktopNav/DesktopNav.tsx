import styles from './DesktopNav.module.css';

/**
 * The functional component for the DesktopNav
*/

const DesktopNav: React.FC = () => {
  const navContainerClasses = `
    ${styles["navigation-container"]} flex
  `

  return (
    <div className={styles["desktop-navigation"]}>
      <div className={styles["desktop-navigation__inner"]}>
        <nav>
          <ul className={navContainerClasses}>
            <li className={styles["site-navigation__item"]}>About<span className={styles["tag-end-decoration"]}>{"/>"}</span></li>
            <li className={styles["site-navigation__item"]}>Projects<span className={styles["tag-end-decoration"]}>{"/>"}</span></li>
            <li className={styles["site-navigation__item"]}>Blog<span className={styles["tag-end-decoration"]}>{"/>"}</span></li>
            <li className={styles["site-navigation__item"]}>Contact<span className={styles["tag-end-decoration"]}>{"/>"}</span></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default DesktopNav;