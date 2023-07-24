import styles from './MobileNav.module.css';
/**
 * The functional component for the MobileNav
*/

const MobileNav: React.FC = () => {
  const hamburgerOuterClasses = `
    ${styles["hamburger-menu"]} bg__white-accent
  `

  const hamburgerInnerClasses = `
    ${styles["hamburger-menu__inner"]} flex pos-r
  `

  return (
    <div className={hamburgerOuterClasses}>
      <div className={hamburgerInnerClasses}>
        <span className={styles["hamburger-menu__line"]}></span>
        <span className={styles["hamburger-menu__line"]}></span>
        <span className={styles["hamburger-menu__line"]}></span>
      </div>
    </div>
  )
}

export default MobileNav;