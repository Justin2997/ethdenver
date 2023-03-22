import "./header.css";

import logo from "assets/logo/cryptotacos.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { magic } from "utils/magic";

export function Header() {
  const navigate = useNavigate();

  async function disconnectWallet() {
    await magic.wallet.disconnect(); // clears user session
    localStorage.removeItem("accountAddress");
    navigate("/");
  }

  return (
    <header>
      <Navbar>
        <React.Fragment key=".0">
          <Navbar.Brand href="https://flowbite.com/">
            <img alt="Flowbite Logo" className="h-8 mr-3 sm:h-9" src={logo} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CryptoTaco
            </span>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/dashboard" className="text-white">
              Dashboard
            </Link>
          </Navbar.Collapse>

          <div className="flex gap-3 md:order-2 text-white">
            <Dropdown inline label={<Avatar placeholderInitials="Ox" />}>
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
              </Dropdown.Header>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => disconnectWallet()}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        </React.Fragment>
      </Navbar>
    </header>
  );
}
