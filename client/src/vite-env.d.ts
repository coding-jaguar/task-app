/// <reference types="vite/client" />

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

contractadd = 0x63554aa16c56e55693e8d437036a84db8444e764;
