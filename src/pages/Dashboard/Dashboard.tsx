import { useHookstate } from "@hookstate/core";
import { Header } from "components/Header/Header";
import TransactionCard from "components/TransactionCard";
import React, { useEffect } from "react";
import { userState } from "store/userState";

export default function Dashboard() {
  const user = useHookstate(userState);

  useEffect(() => {
    const accountAddress = localStorage.getItem("accountAddress");
    if (accountAddress) {
      user.set([accountAddress]);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const userInfo = user.get();
  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />

        <div style={{ margin: "50px" }}>
          <TransactionCard
            chain="polygon"
            address={userInfo[0]}
            tokenSymbol="MATIC"
            tokenDecimals={18}
            tokenName="Matic"
            tokenAmount={20.0}
          />
        </div>

        <div className="justify-center gap-12">
          <div style={{ margin: "50px" }}>
            <TransactionCard
              chain="ethereum"
              address={userInfo[0]}
              tokenSymbol="ETH"
              tokenDecimals={18}
              tokenName="Ethereum"
              tokenAmount={0.01}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
