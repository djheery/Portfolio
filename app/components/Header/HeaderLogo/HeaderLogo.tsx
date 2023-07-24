import { BackgroundColorOptions, TextColorOptions } from '@/app/models/global-types';
import styles from './HeaderLogo.module.css';

/**
 * The functional component for the HeaderLogo
*/

const HeaderLogo: React.FC = () => {
  const containerClasses = `
    ${BackgroundColorOptions.WHITE_ACCENT}
    ${styles["header-logo"]}
  `

  const iconClasses = `
    ${TextColorOptions.PRIMARY_BLUE}
  `

  return (
    <div className={containerClasses}>
      <div className={styles["header-logo__inner"]}>
        <span className={iconClasses}>
          {`</>`}
        </span>
      </div>
    </div>
  )
}

export default HeaderLogo;