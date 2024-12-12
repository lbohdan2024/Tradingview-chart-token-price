interface Window {
  ethereum?: MetaMaskInpageProvider
  solana?: {
    isPhantom?: boolean
    publicKey?: {
      toString(): string
      toBase58(): string
    }
    connect: (options?: {
      onlyIfTrusted: boolean
    }) => Promise<{ publicKey: { toString(): string; toBase58(): string } }>
    disconnect: () => Promise<void>
    signMessage: (message: Uint8Array) => Promise<{ signature: Uint8Array }>
    on: (event: string, handler: (args: any) => void) => void
  }
}
