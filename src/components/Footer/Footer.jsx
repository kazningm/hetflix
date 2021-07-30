import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.png";
import style from "./Footer.module.css";

const Footer = (props) => {
    return (
        <footer className={style.root}>
            <div>
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
            </div>
        </footer>
    )
}

export default Footer;