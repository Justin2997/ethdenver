import { useHookstate } from "@hookstate/core";
import { Header } from "components/Header/Header";
import TransactionCard from "components/TransactionCard";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "store/userState";

export default function Dashboard() {
  const user = useHookstate(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const accountAddress = localStorage.getItem("accountAddress");
    if (accountAddress) {
      user.set([accountAddress]);
    } else {
      navigate("/login");
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
            tokenSymbol="USDC"
            tokenDecimals={18}
            tokenName="Matic"
            tokenAmount={19.4}
          />
        </div>

        <div className="justify-center gap-12">
          <div style={{ margin: "50px" }}>
            <TransactionCard
              chain="ethereum"
              address={userInfo[0]}
              tokenSymbol="USDC"
              tokenDecimals={18}
              tokenName="Ethereum"
              tokenAmount={20}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
