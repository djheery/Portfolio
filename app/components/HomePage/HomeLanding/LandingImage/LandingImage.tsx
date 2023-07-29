import { BackgroundColorOptions } from '@/app/models/global-types';
import styles from './LandingImage.module.css';

/**
 * The functional component for the LandingImage
*/

const LandingImage: React.FC = () => {
  const outerClasses = `
    ${styles["landing-image"]} 
    pos-r 
    ${BackgroundColorOptions.SECONDARY_BLUE}
  `
  
  const rightBorderClasses = `
    ${BackgroundColorOptions.WHITE_ACCENT} 
    pos-abs
    ${styles["landing-image__right-border"]}
  `;

  const innerClasses = `
    ${styles["landing-image__inner"]} pos-r
  `

  return (
    <div className={outerClasses}>
      <div className={rightBorderClasses}></div>
      <div className={innerClasses}>
        <img src={"/images/dan-guitar.jpg"} alt="" />
        <div className={styles["background-filter"]}></div>
      </div>
    </div>
  )
}

export default LandingImage;