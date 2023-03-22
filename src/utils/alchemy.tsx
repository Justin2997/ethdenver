import { Alchemy, Network } from "alchemy-sdk";

// Optional config object, but defaults to the API key 'demo' and Network 'eth-mainnet'.
const settings = {
  apiKey: "RuNPBHN9G6z5ZF-UDkUT_-vhvRhytSjX", // Replace with your Alchemy API key.
  network: Network.MATIC_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

export default alchemy;
