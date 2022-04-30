import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Today Task Tracker</Navbar.Brand>
    </Navbar>
  );
}
