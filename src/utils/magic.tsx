/* eslint-disable @typescript-eslint/no-explicit-any */
import { Magic } from "magic-sdk";

export enum Networks {
  Ethereum = "Ethereum (Goerli)",
  Polygon = "Polygon (Mumbai)",
  Optimism = "Optimism (Goerli)",
}

const formattedNetwork = (): any => {
  return {
    rpcUrl: "https://polygon-rpc.com",
    chainId: 137,
  };
};

const magic = new Magic("pk_live_1BBC04D07CC06D70", {
  network: {
    rpcUrl: "https://polygon-rpc.com/", // or https://matic-mumbai.chainstacklabs.com for testnet
    chainId: 137, // or 80001 for polygon testnet
  },
});

export { formattedNetwork, magic };
