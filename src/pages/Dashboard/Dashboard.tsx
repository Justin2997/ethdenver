import { useHookstate } from "@hookstate/core";
import { Header } from "components/Header/Header";
import TransactionCard from "components/TransactionCard";
import { Spinner } from "flowbite-react";
import { map } from "leaflet";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "store/userState";
import alchemy from "utils/alchemy";

export default function Dashboard() {
  const user = useHookstate(userState);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    const accountAddress = localStorage.getItem("accountAddress");
    if (accountAddress) {
      user.set([accountAddress]);
    } else {
      navigate("/login");
    }

    getTransactionHistory();
  }, []);

  async function getTransactionHistory() {
    setIsLoading(true);
    const accountAddress = localStorage.getItem("accountAddress");
    const res = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      toAddress: accountAddress || "",
      excludeZeroValue: true as any,
      category: ["erc20", "internal", "external"] as any,
    });

    setTransactions(res.transfers as any);
    setIsLoading(false);
    console.log("data", res);
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        {!isLoading ? (
          <React.Fragment>
            {transactions.map((transaction: any) => {
              return (
                <div key={transaction.hash} style={{ margin: "50px" }}>
                  <TransactionCard
                    chain="polygon"
                    address={transaction.hash}
                    tokenSymbol={transaction.asset}
                    tokenDecimals={18}
                    tokenName={transaction.asset}
                    tokenAmount={transaction.value}
                  />
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <Spinner color="info"></Spinner>
        )}
      </div>
    </React.Fragment>
  );
}
