import HomeAbout from './HomeAbout/HomeAbout';
import HomeLanding from './HomeLanding/HomeLanding';
import styles from './HomePage.module.css';
import HomePortfolio from './HomePortfolio/HomePortfolio';

/**
 * The page component for HomePage
*/

const Home: React.FC = () => {
  return (
    <>
      <HomeLanding />
      <HomePortfolio />
      <HomeAbout />
    </>
  )
}

export default Home;