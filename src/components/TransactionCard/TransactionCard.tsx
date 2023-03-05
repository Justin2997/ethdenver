/* eslint-disable max-len */
import { useHookstate } from "@hookstate/core";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { Button, Card } from "flowbite-react";
import Moralis from "moralis";
import React from "react";
import { useQuery } from "react-query";
import { userState } from "store/userState";

export default function TransactionCard() {
  const user = useHookstate(userState);

  const { isLoading, data } = useQuery(
    "transactionHistory",
    getTransactionHistory
  );

  async function getTransactionHistory() {
    await Moralis.start({
      apiKey:
        "QgrtCoTcqFfcw1N6iYcHzCTbnTBecWe318E3KVaJSNj8deVjYXk1nCoGLRkhG67H",
    });
    const address = user.get()[0];

    const chain = EvmChain.GOERLI;
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });

    console.log(response.toJSON());
  }

  const userInfo = user.get();
  console.log(userInfo);

  console.log("data", data);
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        You have everything you need to get started accepting crypto payments.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        This is your wallet address : {userInfo}
      </p>
    </Card>
  );
}
