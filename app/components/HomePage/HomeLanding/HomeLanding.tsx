import { TextColorOptions } from '@/app/models/global-types';
import SectionContainer from '../../Containers/SectionContainer/SectionContainer';
import styles from './HomeLanding.module.css';

/**
 * The functional component for the HomeLanding
 *
 * @param myParam your params here
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
        
        <h1>Daniel Heery</h1>
        <h2 className={TextColorOptions.GREY_ACCENT}>I Build stuff for the web...</h2>
        <p>Hi, my name is Daniel Heery, I'm an ex-musician who has retrained as a Developer</p>
        <p>This website documents my work over the past couple of years.</p>
      </SectionContainer>
    </div>
  )
}

export default HomeLanding;