import logo from "assets/logo/cryptotacos.png";
import LoginWithMagic from "components/LoginWithMagic";
import React from "react";

export default function PrimaryView() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <img
          src={logo}
          alt="CryptoTaco"
          style={{ width: "25%", margin: "auto" }}
        />
        <h1
          className="font-bold tracking-tight text-gray-900 dark:text-white"
          style={{
            fontSize: "6em",
            textAlign: "center",
          }}
        >
          CryptoTaco
        </h1>
        <p
          className="font-bold tracking-tight text-gray-900 dark:text-white"
          style={{
            fontSize: "2em",
            textAlign: "center",
            marginBottom: "0.4em",
            fontStyle: "italic",
          }}
        >
          Remove ALL the friction to accept crypto
        </p>
        <LoginWithMagic />
      </div>
    </React.Fragment>
  );
}
