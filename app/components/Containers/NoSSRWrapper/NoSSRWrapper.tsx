import dynamic from "@/node_modules/next/dynamic"
import { PropsWithChildren } from "react"

const NoSSRWrapper: React.FC<PropsWithChildren> = (props) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default dynamic(() => {
  return Promise.resolve(NoSSRWrapper);
}, {ssr: false})