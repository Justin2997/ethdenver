import "./header.css";

import logo from "assets/logo/cryptotacos.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

export const Header = () => (
  <header>
    <Navbar>
      <React.Fragment key=".0">
        <Navbar.Brand href="https://flowbite.com/">
          <img alt="Flowbite Logo" className="h-8 mr-3 sm:h-9" src={logo} />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            CryptoTacos
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link active href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/login">Login</Navbar.Link>
          <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        </Navbar.Collapse>

        <div className="flex gap-3 md:order-2 text-white">
          <Dropdown inline label={<Avatar placeholderInitials="Ox" />}>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
            </Dropdown.Header>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </React.Fragment>
    </Navbar>
  </header>
);
