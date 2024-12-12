import SolComponent from "@/components/chain-component/SolComponent";
import ServerMetadataWrapper, { generateMetadata } from "../../ServerMetadataWrapper";
export { generateMetadata };
export default function EthPage() {
    return (
    <ServerMetadataWrapper>
    <SolComponent></SolComponent>
    </ServerMetadataWrapper>
  )
}