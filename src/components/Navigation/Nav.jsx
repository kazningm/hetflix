import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <ul className={style.headNav}>
                <li>
                    <NavLink to="/all">ALL</NavLink>
                </li>
                <li>
                    <NavLink to="/documentary">DOCUMENTARY</NavLink>
                </li>
                <li>
                    <NavLink to="/horror">HORROR</NavLink>
                </li>
                <li>
                    <NavLink to="/crime">CRIME</NavLink>
                </li>
                <li></li>
                <li>
                    <label htmlFor="sort">SORT BY</label>
                    <select name="sort" id=""></select>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;