"use client"

import styles from './PortfolioDesktop.module.css';
import { 
  bambridgeTile, 
  manisTile, 
  sonicShareTile 
} from '../PortfolioMobile/PortfolioMobile';
import React from 'react';


const mainItemClass = `
  ${styles["portfolio-desktop__item"]}
`

/**
 * The functional component for the PortfolioDesktop
 *
*/

const PortfolioDesktop: React.FC = () => {

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    const parentDiv = target.parentElement?.parentElement 
    const position = parentDiv?.dataset.position;
    
    const mainDiv = 
      document.querySelector(`div[data-position="main"]`) as HTMLDivElement;
    const leftDiv = 
      document.querySelector(`div[data-position="left"]`) as HTMLDivElement;
    const rightDiv = 
      document.querySelector(`div[data-position="right"]`) as HTMLDivElement;
    const outerDiv = 
      document.querySelector(`div[data-transition-direction]`) as HTMLDivElement;
    
    switch(position) {
      case "left" : 
        leftDiv!.dataset.position = "main";
        mainDiv!.dataset.position = "right"; 
        rightDiv!.dataset.position = "left" 
        outerDiv!.dataset.transitionDirection = "right"
        break; 
      case "right" : 
      rightDiv!.dataset.position = "main"; 
      mainDiv!.dataset.position = "left"; 
      leftDiv!.dataset.position = "right";
      outerDiv!.dataset.transitionDirection = "left"
        break; 
      default :
        return;
    }
  }
  
  return (
    <div className={styles["portfolio-desktop"]}>
      <div className={styles["portfolio-desktop__inner"]} data-transition-direction="left">
        <div 
          className={mainItemClass} 
          style={manisTile} 
          onClick={clickHandler} 
          data-position="main"
        >
          <div className={styles["portfolio-desktop__item--inner"]}>
            <div className={styles["background-filter"]}></div>
          </div>
        </div>
        <div 
          className={mainItemClass} 
          style={bambridgeTile} 
          onClick={clickHandler}
          data-position="left"
        >
          <div className={styles["portfolio-desktop__item--inner"]}>
            <div className={styles["background-filter"]}></div>
          </div>
        </div>
        <div 
          className={mainItemClass} 
          style={sonicShareTile} 
          onClick={clickHandler}
          data-position="right"
        >
          <div className={styles["portfolio-desktop__item--inner"]}>
            <div className={styles["background-filter"]}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDesktop;