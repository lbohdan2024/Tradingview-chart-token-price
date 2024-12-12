export {}; // Ensure it's treated as a module
declare global {
  interface Window {
    solanaWeb3: any;
  }
}
