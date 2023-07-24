import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import styles from './Navigation.module.css';

/**
 * The functional component for the Navigation
*/

const Navigation: React.FC = () => {
  return (
    <div className={styles["site-navigation"]}>
      <div className={styles["site-navigation__inner"]}>
        <MobileNav/>
        <DesktopNav />
      </div>
    </div>
  )
}

export default Navigation;