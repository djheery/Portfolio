import { TextColorOptions } from '@/app/models/global-types';
import SectionContainer from '../../Containers/SectionContainer/SectionContainer';
import PillTextIcon from '../../Icons/PillTextIcon';
import styles from './HomeLanding.module.css';

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
        <PillTextIcon text="Welcome!"/>
        <h1>My Name is<br/>Daniel Heery</h1>
        <h2 className={TextColorOptions.GREY_ACCENT}>Musician turned Developer.</h2>
        <p>Hi, my name is Daniel Heery, I'm an ex-musician who has retrained as a Developer This website documents my work over the past couple of years. I currently work for Bambridge Accountants.</p>
      </SectionContainer>
    </div>
  )
}

export default HomeLanding;