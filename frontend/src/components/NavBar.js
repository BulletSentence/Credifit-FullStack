import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavStyle.css";
import logo from "../assets/credifit.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-custom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="logo image">
            <img src={logo} alt="logo" />
        </div>
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item navbar-item-custom" to="/">
              Página de Upload
            </NavLink>

            <NavLink
              className="navbar-item navbar-item-custom"
              to="/list"
            >
              Listagem de Transações
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button custom-btn" href="https://lab.coodesh.com/itzleoalmeidaz/fullstack-afiliados" target="_blank" rel="noreferrer">
                        Página do Teste
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
