"use client"

import ContentContainer from '@/app/components/Containers/ContentContainer/ContentContainer';
import FullScreenContainer from '@/app/components/Containers/FullScreenContainer/FullScreenContainer';
import NoSSRWrapper from '@/app/components/Containers/NoSSRWrapper/NoSSRWrapper';
import SectionContainer from '@/app/components/Containers/SectionContainer/SectionContainer';
import { Suspense } from 'react';
import GameOfLife from './GameOfLife/GameOfLife';
import styles from './page.module.css';

/**
 * The functional component for the page
*/

const ReactGameOfLife: React.FC = () => {
  return (
    <FullScreenContainer>
      <ContentContainer>
        <div className={styles["landing-section__outer"]}>
          <div className={styles["page__introduction"]}>
            <h1>Conaways Game of Life</h1>
            <p>This is a mini-project to create conways game of life. I have made the project in various languages and generally use it as a baseline when I am practicing in new languages.</p>
          </div>
          <Suspense>
            <NoSSRWrapper>
              <GameOfLife/>
            </NoSSRWrapper>
          </Suspense>
        </div>
      </ContentContainer>
    </FullScreenContainer>
  )
}

export default ReactGameOfLife;