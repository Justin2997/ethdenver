/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { web3 } from "utils/web3";

export default function SendComponent() {
  const [toAddress, setToAddress] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [hash, setHash] = React.useState("");

  async function sendTransaction() {
    setIsLoading(true);
    const publicAddress = localStorage.getItem("accountAddress");
    console.log("publicAddress", publicAddress);

    const txnParams = {
      from: publicAddress,
      to: toAddress,
      value: web3.utils.toWei(amount, "ether"),
      gas: 21000,
    };
    web3.eth
      .sendTransaction(txnParams as any)
      .on("transactionHash", (txHash) => {
        setHash(txHash);
        console.log("Transaction hash:", txHash);
      })
      .then((receipt) => {
        setToAddress("");
        setAmount("");
        console.log("Transaction receipt:", receipt);
        setIsLoading(false);
      });
  }

  return (
    <React.Fragment>
      <Button
        style={{
          width: "100%",
          marginBottom: "20px",
          backgroundColor: "#22C4BD",
        }}
      >
        Withdraw to Bank 🏦
      </Button>
      <Card>
        <h2 style={{ color: "white" }}>Withdraw to MATIC address</h2>
        <TextInput
          value={toAddress}
          onChange={(e: any) => setToAddress(e.target.value)}
          placeholder="Receiving Address"
        />
        <TextInput
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
          placeholder={"Amount"}
        />
        <Button onClick={sendTransaction} disabled={!toAddress || !amount}>
          {isLoading ? <Spinner color="info" /> : "Send Transaction"}
        </Button>
      </Card>
    </React.Fragment>
  );
}
