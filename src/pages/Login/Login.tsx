import logo from "assets/logo/cryptotacos.png";
import LoginWithMagic from "components/LoginWithMagic";
import React from "react";

export default function PrimaryView() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <img
          src={logo}
          alt="CryptoTacos"
          style={{ width: "15%", position: "absolute", left: "47%" }}
        />
        <LoginWithMagic />
      </div>
    </React.Fragment>
  );
}
