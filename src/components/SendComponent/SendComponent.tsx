/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import React from "react";

export default function SendComponent() {
  const [toAddress, setToAddress] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function sendTransaction() {
    setIsLoading(true);
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
        <h2 style={{ color: "white" }}>Withdraw to ETH address</h2>
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
