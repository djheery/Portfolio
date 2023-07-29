"use client"

import { BackgroundColorOptions } from '@/app/models/global-types';
import SectionContainer from '../Containers/SectionContainer/SectionContainer';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Navigation from './Navigation/Navigation';
import { useEffect } from 'react';
import { setupHeaderListener } from '@/app/util/debounce';

const headerInnerStyles = `
${styles["site-header__inner"]} flex
`

const headerOuterStyles = `
${styles["site-header"]}
${BackgroundColorOptions.PRIMARY_BLUE}
`

/**
 * The functional component for Header
*/

const Header: React.FC = () => {
  useEffect(() => setupHeaderListener(), [])

  return (
    <header className={headerOuterStyles}>
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