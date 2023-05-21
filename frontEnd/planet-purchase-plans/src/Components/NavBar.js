import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../assets/ppp.png";
import comingSoonLogo from "../assets/comingsoon.png"; // Add the coming soon logo path

import ThemeContext from "./ThemeContext";

function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const themeMode = darkMode ? "dark" : "light";

  const navbarStyle = {
    backgroundColor: themeMode === "light" ? "#F3EFE6" : "#343a40",
    fontFamily: "Syne",
  };

  return (
    <header>
      <Navbar bg={themeMode} expand="lg" style={navbarStyle}>
        <div className="logo">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" height="40" />
            Planet Purchase Plans
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-center">
            <Nav.Link as={Link} to="/" className="mr-2">
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{
                  backgroundColor:
                    themeMode === "light" ? "#F3C969" : "#800080",
                  color: themeMode === "light" ? "black" : "white",
                }}
              >
                Home
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mr-2">
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{
                  backgroundColor:
                    themeMode === "light" ? "#EDFF86" : "#4B0082",
                  color: themeMode === "light" ? "black" : "white",
                }}
              >
                About
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/planets" className="mr-2">
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{
                  backgroundColor:
                    themeMode === "light" ? "#FFF5B2" : "#D4FCC3",
                  color: themeMode === "light" ? "black" : "white",
                }}
              >
                Planets
              </Button>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/theCephusHasLanded/finalMileAstroLogistics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={themeMode === "light" ? "success" : "dark"}
                style={{
                  backgroundColor:
                    themeMode === "light" ? "#362C28" : "#362C28",
                  color: themeMode === "light" ? "black" : "white",
                }}
              >
                Github Repo
              </Button>
            </Nav.Link>
            <div className="ml-2">
              <Nav.Link as={Link} to="/planets/new">
                <Button
                  variant={themeMode === "light" ? "success" : "dark"}
                  style={{
                    backgroundColor:
                      themeMode === "light" ? "#800080" : "#362C28",
                    color: themeMode === "light" ? "black" : "white",
                  }}
                >
                  <img
                    src={comingSoonLogo}
                    alt="Coming Soon"
                    height="28"
                    className="mr-1"
                  />
                  Add New Planet
                </Button>
              </Nav.Link>
              <div className="ml-2">
                <Button
                  variant={
                    themeMode === "light"
                      ? "outline-secondary"
                      : "outline-light"
                  }
                  onClick={toggleDarkMode}
                >
                  {themeMode === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBar;
