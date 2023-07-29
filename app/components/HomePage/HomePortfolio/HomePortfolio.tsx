import SectionContainer from '../../Containers/SectionContainer/SectionContainer';
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
            <h1>Projects and Work</h1>
            <p>Over the last two years I have been undertaking various amounts of work.</p>
            <p>Below are some of the projects that I have been involved with.</p>
          </div>
          <PortfolioMobile />
          <PortfolioDesktop />
        </div>
      </div>
    </SectionContainer>
  )
}

export default HomePortfolio;