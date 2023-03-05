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

  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />

        <div className="flex justify-center gap-12">
          <div style={{ margin: "100px" }}>
            <TransactionCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
