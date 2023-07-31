import { PropsWithChildren } from "react";

/**
 * The functional component for the FullScreenContainer
*/

const FullScreenContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="full-screen">
      {children}
    </div>
  )
}

export default FullScreenContainer;