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
                    <NavLink to="/all" onClick={ changeFilmsList } >ALL</NavLink>
                </li>
                <li>
                    <NavLink to="/family" onClick={ changeFilmsList } >FAMILY</NavLink>
                </li>
                <li>
                    <NavLink to="/action" onClick={ changeFilmsList } >ACTION</NavLink>
                </li>
                <li>
                    <NavLink to="/drama" >DRAMA</NavLink>
                </li>
                <li>
                    <NavLink to="/fantasy" >FANTASY</NavLink>
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