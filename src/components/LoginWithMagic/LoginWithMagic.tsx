/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHookstate } from "@hookstate/core";
import { Button, Spinner } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "store/userState";
import magic from "utils/magic";

export default function LoginWithMagic() {
  const user = useHookstate(userState);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  function loginWithConnect() {
    setIsLoading(true);

    magic.wallet
      .connectWithUI()
      .then(async (accountAddress) => {
        user.set(accountAddress);
        localStorage.setItem("accountAddress", accountAddress[0]);
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Button onClick={() => loginWithConnect()} type="button" className="button">
      {isLoading ? <Spinner color="info" /> : "Connect wallet"}
    </Button>
  );
}
