/* eslint-disable max-len */
import { useHookstate } from "@hookstate/core";
import { Button, Card } from "flowbite-react";
import React, { useEffect } from "react";
import { userState } from "store/userState";

export default function AccountCard() {
  const user = useHookstate(userState);

  const userInfo = user.get();
  console.log(userInfo);

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        You have everything you need to get started accepting crypto payments.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        This is your wallet address : {userInfo}
      </p>
      <img
        src={
          "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" +
          userInfo +
          "&choe=UTF-8"
        }
        width={300}
        style={{ margin: "auto" }}
        alt="QR Code"
      />
    </Card>
  );
}
