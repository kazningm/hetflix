import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.png";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <ul className={style.headNav}>
                <li>
                    <NavLink to="/home">
                        <img class={style.logo} src={logo} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home">Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/serials">Сериалы</NavLink>
                </li>
                <li>
                    <NavLink to="/films">Фильмы</NavLink>
                </li>
                <li>
                    <NavLink to="/new">Новые и популярные</NavLink>
                </li>
                <li>
                    <NavLink to="/my-list">Мой список</NavLink>
                </li>

                <li style={{ float: "right" }}>
                    <NavLink to="/login">Логин</NavLink>
                </li>
                <li style={{ float: "right" }}>
                    <NavLink to="/mode">Режим</NavLink>
                </li>
                <li style={{ float: "right" }}>
                    <NavLink to="/search">Поиск</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;