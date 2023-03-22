import { useHookstate } from "@hookstate/core";
import AccountCard from "components/AccountCard";
import { Header } from "components/Header/Header";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "store/userState";

export default function PrimaryView() {
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

  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />

        <div className="flex justify-center gap-12">
          <div style={{ margin: "100px" }}>
            <AccountCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
