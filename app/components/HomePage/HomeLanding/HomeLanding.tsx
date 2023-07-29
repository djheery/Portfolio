import { TextColorOptions } from '@/app/models/global-types';
import SectionContainer from '../../Containers/SectionContainer/SectionContainer';
import PillTextIcon from '../../Icons/PillTextIcon';
import styles from './HomeLanding.module.css';
import LandingImage from './LandingImage/LandingImage';

/**
 * The functional component for the HomeLanding
*/

const HomeLanding: React.FC = () => {
  const landingContainerClasses = `
    full-screen
    flex 
    ${styles["home-landing"]}
  `

  return (
    <div className={landingContainerClasses}>
      <SectionContainer>
        <div className={styles["home-landing__main"]}>
          <div className={styles["home-landing__main--inner"]}>
          <PillTextIcon text="Welcome!"/>
            <h1>
              My Name is<br className={styles["mobile-line-break"]} /> Daniel Heery
            </h1>
            <h2 className={TextColorOptions.GREY_ACCENT}>
              Musician turned Developer.
            </h2>
            <p className={styles["home-landing__para"]}>
              Hi, my name is Daniel Heery, I&apos;m an ex-musician who has retrained as a Developer This website documents my work over the past couple of years. I currently work for Bambridge Accountants.
            </p>
          </div>
          <LandingImage />
        </div>
      </SectionContainer>
    </div>
  )
}

export default HomeLanding;