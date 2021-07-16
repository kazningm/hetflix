import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SortFilms from "./SortFilms/SortFilms";

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
                <li style={{ flexGrow: 10 }}></li>
                <li style={{ paddingRight: 0 }}>
                    <SortFilms />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;