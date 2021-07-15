import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.png";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <ul className={style.headNav}>
                <li>
                    <NavLink to="/home">ALL</NavLink>
                </li>
                <li>
                    <NavLink to="/serials">DOCUMENTARY</NavLink>
                </li>
                <li>
                    <NavLink to="/films">HORROR</NavLink>
                </li>
                <li>
                    <NavLink to="/new">CRIME</NavLink>
                </li>
                <li></li>
                <li>
                    <NavLink to="/login">SORT BY</NavLink>
                </li>
                <li>
                    <NavLink to="/mode">RELEASE DATE</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;