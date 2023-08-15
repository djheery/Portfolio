import { BackgroundColor } from '@/app/models/global-types';
import { PropsWithChildren } from 'react';

/**
 * An interface for defining sections with a different background color
 *
 * @param backgroundColor The background color of the chosen section
*/

export interface BackgroundContainerProps extends PropsWithChildren {
  backgroundColor: BackgroundColor
}

/**
 * The functional component for the BackgroundContainer
*/

const BackgroundContainer: React.FC<BackgroundContainerProps> = (props) => {
  return (
    <div className={props.backgroundColor}>
      {props.children}
    </div>
  )
}

export default BackgroundContainer;
