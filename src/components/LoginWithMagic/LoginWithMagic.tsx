/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "flowbite-react";
import { Magic } from "magic-sdk";
import React from "react";

export default function LoginWithMagic() {
  function loginWithConnect() {
    const magic = new Magic("pk_live_1BBC04D07CC06D70", {
      network: "goerli",
    });

    magic.wallet
      .connectWithUI()
      .then(async (res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Button onClick={() => loginWithConnect()} type="button" className="button">
      Connect wallet
    </Button>
  );
}
