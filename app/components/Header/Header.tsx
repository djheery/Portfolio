import SectionContainer from '../Containers/SectionContainer/SectionContainer';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Navigation from './Navigation/Navigation';

/**
 * The functional component for Header
*/

const Header: React.FC = () => {
  const headerInnerStyles = `
    ${styles["site-header__inner"]} flex
  `

  return (
    <header className={styles["site-header"]}>
      <SectionContainer>
        <div className={headerInnerStyles}>
          <HeaderLogo />
          <Navigation />
        </div>
      </SectionContainer>
    </header>
  )
}

export default Header;