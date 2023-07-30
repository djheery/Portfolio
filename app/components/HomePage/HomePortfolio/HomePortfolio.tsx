import LinkButton from '../../Buttons/LinkButton';
import SectionContainer from '../../Containers/SectionContainer/SectionContainer';
import PillTextIcon from '../../Icons/PillTextIcon';
import styles from './HomePortfolio.module.css';
import PortfolioDesktop from './PortfolioDesktop/PortfolioDesktop';
import PortfolioMobile from './PortfolioMobile/PortfolioMobile';

const outerClasses = `
 ${styles["portfolio-section"]}
`

/**
 * The functional component for the HomePortfolio
 *
*/

const HomePortfolio: React.FC = () => {
  return (
    <SectionContainer>
      <div className={outerClasses}>
        <div className={styles["portfolio-section__inner"]}>
          <div className={styles["portfolio-section__introduction"]}>
            <PillTextIcon text="Portfolio"/>
            <h1>Projects and Work</h1>
            <p>Over the last two years I have been undertaking various amounts of work.</p>
            <p>Below are some of the projects that I have been involved with.</p>
          </div>
          <PortfolioMobile />
          <PortfolioDesktop />
          <div className={styles["button-section"]}>
            <LinkButton url="/portfolio" text="View all Projects!" />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HomePortfolio;