import SectionContainer from '../../Containers/SectionContainer/SectionContainer';
import PillTextIcon from '../../Icons/PillTextIcon';
import styles from './HomeAbout.module.css';

/**
 * The functional component for the HomeAbout
 *
*/

const HomeAbout: React.FC = () => {
  return (
    <SectionContainer>
      <div className={styles["about-section"]}>
        <div className={styles["about-section__inner"]}>
          <div className={styles["about-section__left"]}>
            <PillTextIcon text="About me" />
            <div className={styles["about-section__img"]}>
              <img src="/images/dan-and-liz.jpg" alt="" />
            </div>
            <h1>Daniel Heery</h1>
          </div>
          <div className={styles["about-section__right"]}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate eaque quaerat perferendis qui blanditiis ea non officia ab earum impedit fugit facilis</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti! Iure, enim reprehenderit expedita aliquam voluptatum distinctio nemo! Qui facere</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente iste provident dolore omnis enim sunt asperiores officia non commodi corporis voluptatibus rem dicta adipisci delectus veritatis labore, quas veniam quos! Modi corporis aliquid distinctio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae voluptas repellendus ea expedita libero maxime, tempora voluptatem unde deleniti.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HomeAbout;