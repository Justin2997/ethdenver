import "./header.css";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

export const Header = () => (
  <header>
    <Navbar>
      <React.Fragment key=".0">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            alt="Flowbite Logo"
            className="h-6 mr-3 sm:h-9"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link active href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        </Navbar.Collapse>

        <div className="flex gap-3 md:order-2 text-white">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
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
