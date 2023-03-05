/* eslint-disable max-len */
import { Badge, Card } from "flowbite-react";
import React from "react";

export default function TransactionCard(props: {
  chain: string;
  address: string;
  tokenSymbol: string;
  tokenDecimals: number;
  tokenName: string;
  tokenAmount: number;
}) {
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        🤑 You have received{" "}
        <span style={{ color: "#FFCE55" }}>
          {props.tokenAmount} {props.tokenSymbol}
        </span>{" "}
        from <span style={{ color: "#FFCE55" }}>{props.address}</span>
      </h5>
      <Badge color="info" style={{ width: "70px", backgroundColor: "#22C4BD" }}>
        {props.chain}
      </Badge>
    </Card>
  );
}
