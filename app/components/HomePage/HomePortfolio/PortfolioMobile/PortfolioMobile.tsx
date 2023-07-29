import { BackgroundColorOptions, TextColorOptions } from '@/app/models/global-types';
import styles from './PortfolioMobile.module.css';

export const images = {
  MANIS_LAW: "url('/images/manis-law.png')",
  BAMBRIDGE_ACCOUNTANTS: "url('images/bambridge-accountants.png')",
  SONIC_SHARE: "url('/images/sonic-share.png')",
  PLAYTHROUGH_PRACTICE: "url('/images/playthrough-practice.png')",
  PORTFOLIO: "url('/images/portfolio.png')"
}

export const bambridgeTile = {
  backgroundImage: images.BAMBRIDGE_ACCOUNTANTS
}

export const manisTile = {
  backgroundImage: images.MANIS_LAW
}

export const portfolioTile = {
  backgroundImage: images.PORTFOLIO
}

export const sonicShareTile = {
  backgroundImage: images.SONIC_SHARE
}

export const itemTextClasses = `
  ${styles["portfolio-mobile__item--text"]}
  pos-abs
  ${BackgroundColorOptions.SECONDARY_BLUE}
`

/**
 * The functional component for the PortfolioMobile
 *
 * @param myParam your params here
*/

const PortfolioMobile: React.FC = () => {
  return (
    <div className={styles["portfolio-mobile"]}>
      <div className={styles["portfolio-mobile__inner"]}>
        <ul className={styles["portfolio-mobile__item-container"]}>
          <li className={styles["portfolio-mobile__item"]} style={manisTile}>
            <div className={styles["portfolio-mobile__item--inner"]}>
            <div className={styles["background-filter"]}></div>
            <div className={itemTextClasses}>
              <h4>Manis Law</h4>
            </div>
            </div>
          </li>
          <li className={styles["portfolio-mobile__item"]} style={bambridgeTile}>
            <div className={styles["portfolio-mobile__item--inner"]}>
              <div className={styles["background-filter"]}></div>
              <div className={itemTextClasses}>
              <h4>Bambridge Accountants</h4>
            </div>
            </div>
          </li>
          <li className={styles["portfolio-mobile__item"]} style={sonicShareTile}>
            <div className={styles["portfolio-mobile__item--inner"]}>
            <div className={styles["background-filter"]}></div>
            <div className={itemTextClasses}>
              <h4>Sonic Share</h4>
            </div>
            </div>
          </li>
          <li className={styles["portfolio-mobile__item"]} style={portfolioTile}>
            <div className={styles["portfolio-mobile__item--inner"]}>
            <div className={styles["background-filter"]}></div>
            <div className={itemTextClasses}>
              <h4>Portfolio V.1</h4>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PortfolioMobile;