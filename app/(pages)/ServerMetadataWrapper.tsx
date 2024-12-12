import type { Metadata, ResolvingMetadata } from "next"

import { ReactNode } from "react"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const tokenSymbol = searchParams.token_symbol || "Trading"
  return {
    title: `${tokenSymbol}`,
    twitter: {},
  }
}

type ServerMetadataWrapperProps = {
  children: ReactNode
}

const ServerMetadataWrapper = ({ children }: ServerMetadataWrapperProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default ServerMetadataWrapper
