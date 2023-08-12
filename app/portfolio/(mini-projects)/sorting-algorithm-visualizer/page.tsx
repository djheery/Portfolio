import styles from './page.module.css';
import FullScreenContainer from '@/app/components/Containers/FullScreenContainer/FullScreenContainer';
import ContentContainer from '@/app/components/Containers/ContentContainer/ContentContainer';
import SortContainer from './components/SortWidgetContainer/SortWidgetContainer';
import { Suspense } from 'react';
import NoSSRWrapper from '@/app/components/Containers/NoSSRWrapper/NoSSRWrapper';

/**
 * The functional component for the SortingAlgorithmVisualizer page
 *
*/

const SortingAlgorithmVisualizerPage: React.FC = () => {
  return (
    <>
      <FullScreenContainer>
        <ContentContainer>
          <div className={styles["landing-section__outer"]}>
            <div className={styles["page__introduction"]}>
              <h1>Sorting Algorithm Visualizer</h1>
              <p>
                Below is a visualizer for the most common sorting algorithms. I have built this project 
                a few times when practicing for Data Structures and Algorithms assessments and Interview practice. 
              </p>
            </div>
          </div>
        </ContentContainer>
      </FullScreenContainer>
      <ContentContainer>
        <Suspense>
          <NoSSRWrapper>
            <SortContainer />
          </NoSSRWrapper>
        </Suspense>
      </ContentContainer>
    </>
  )
}

export default SortingAlgorithmVisualizerPage;