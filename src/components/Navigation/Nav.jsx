import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SortFilms from "./SortFilms/SortFilms";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { changeFilmsList } from "../../reducers/films_reducer";

const Nav = (props) => {
    const changeFilmsList = () => {
        // console.log(props);
    }
    return (
        <nav>
            <ul className={style.headNav}>
                <li>
                    <NavLink to="/all" activeClassName={ style.active } onClick={ changeFilmsList }>ALL</NavLink>
                </li>
                <li>
                    <NavLink to="/family" activeClassName={ style.active } onClick={ changeFilmsList } >FAMILY</NavLink>
                </li>
                <li>
                    <NavLink to="/action" activeClassName={ style.active } onClick={ changeFilmsList } >ACTION</NavLink>
                </li>
                <li>
                    <NavLink to="/drama" activeClassName={ style.active } onClick={ changeFilmsList } >DRAMA</NavLink>
                </li>
                <li>
                    <NavLink to="/crime" activeClassName={ style.active } onClick={ changeFilmsList } >CRIME</NavLink>
                </li>
                <li style={{ flexGrow: 10 }}></li>
                <li style={{ paddingRight: 0 }}>
                    <SortFilms />
                </li>
            </ul>
        </nav>
    );
}

const NavContainer = compose(
    withRouter,
    connect(null, { changeFilmsList })
)(Nav)

export default NavContainer;