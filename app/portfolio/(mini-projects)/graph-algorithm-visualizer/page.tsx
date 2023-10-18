import ContentContainer from "@/app/components/Containers/ContentContainer/ContentContainer";
import FullScreenContainer from "@/app/components/Containers/FullScreenContainer/FullScreenContainer";
import NoSSRWrapper from "@/app/components/Containers/NoSSRWrapper/NoSSRWrapper";
import { Suspense } from "react";
import styles from "./page.module.css"

/**
 * The functional component for the Graph Algorithm Visualizer Page.  
*/

const GraphAlgorithmVisualizer: React.FC = () => {
  return (
    <>
     <FullScreenContainer>
      <ContentContainer>
        <div className={styles["landing-section__outer"]}>
          <div className={styles["page__introduction"]}>

          </div>  
        </div>  
      </ContentContainer>
     </FullScreenContainer>
     <ContentContainer>
        <Suspense>
          <NoSSRWrapper>
          </NoSSRWrapper>
        </Suspense>
     </ContentContainer>
    </>
  )
}

export default GraphAlgorithmVisualizer;
