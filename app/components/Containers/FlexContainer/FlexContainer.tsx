import styles from './FlexContainer.module.css';


/**
 * An interface that details the props for a flex container
 *
 * @param flexProperties
*/

export interface FlexContainerProps {
  rowMobile?: boolean,
  rowTablet?: boolean,
  rowDesktop?: boolean,
  centerMobile?: boolean, 
  centerTablet?: boolean, 
  centerDesktop?: boolean,
  isCentered: boolean,  
}

/**
 * The functional component for the FlexContainer
 *
 * @param myParam your params here
*/

const FlexContainer: React.FC = () => {
  return (
    <div>
      FlexContainer Component
    </div>
  )
}

export default FlexContainer;