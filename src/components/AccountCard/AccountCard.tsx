/* eslint-disable max-len */
import { BanknotesIcon, PrinterIcon } from "@heroicons/react/24/outline";
import { useHookstate } from "@hookstate/core";
import SendComponent from "components/SendComponent";
import { Button, Card, Modal } from "flowbite-react";
import React, { useEffect } from "react";
import { userState } from "store/userState";
import alchemy from "utils/alchemy";

export default function AccountCard() {
  const user = useHookstate(userState);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const userInfo = user.get();
  const url =
    "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" +
    userInfo +
    "&choe=UTF-8";

  useEffect(() => {
    getUserBalance();
  }, []);

  async function getUserBalance() {
    alchemy.core.getTokenBalances(userInfo[0]).then(console.log);
  }

  return (
    <Card>
      <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        🎉 Start accepting <span style={{ color: "#FFCE55" }}>Crypto</span>{" "}
        payments in your store <span style={{ color: "#FFCE55" }}>today</span>!
      </h4>
      {/*<p className="font-normal text-gray-700 dark:text-gray-400">
        This is your wallet address :{" "}
        <span style={{ color: "#FFCE55" }}>{userInfo}</span>
      </p>*/}
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "350px",
          margin: "auto",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <img src={url} alt="QR Code" />
        <div
          className="flex"
          style={{
            gap: "50px",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg"
            alt="Ethereum"
            width="50px"
          />
          <img
            src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
            alt="Polygon"
            width="50px"
          />
          <img
            src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.png"
            alt="Optimism"
            width="50px"
          />
        </div>
      </div>

      <a href={url} target="_blank" rel="noreferrer">
        <Button style={{ width: "100%" }}>
          <PrinterIcon className="mr-2 h-5 w-5" />
          Print QR Code
        </Button>
      </a>

      <div
        className="flex"
        style={{ gap: "50px", justifyContent: "space-between" }}
      >
        <Button
          style={{ backgroundColor: "#22C4BD" }}
          onClick={() => setIsModalOpen(true)}
        >
          <BanknotesIcon className="mr-2 h-5 w-5" />
          Withdraw
        </Button>

        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white float-right">
          Balance : 39.4$
        </h5>
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Withdraw</Modal.Header>
        <Modal.Body>
          <SendComponent />
        </Modal.Body>
      </Modal>
    </Card>
  );
}
