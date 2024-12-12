import ServerMetadataWrapper, {
  generateMetadata,
} from "../../ServerMetadataWrapper"

import EthComponent from "@/components/chain-component/EthComponent"
export { generateMetadata }
export default function EthPage() {
  return (
    <ServerMetadataWrapper>
      <EthComponent />
    </ServerMetadataWrapper>
  )
}
