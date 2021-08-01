import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SortFilms from "./SortFilms/SortFilms";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { changeFilmsList } from "../../reducers/films_reducer";

const Nav = (props) => {
    return (
        <nav>
            <ul className={style.headNav}>
                <li>
                    <NavLink to="/genre/All" activeClassName={ style.active }>ALL</NavLink>
                </li>
                <li>
                    <NavLink to="/genre/Family" activeClassName={ style.active }>FAMILY</NavLink>
                </li>
                <li>
                    <NavLink to="/genre/Action" activeClassName={ style.active }>ACTION</NavLink>
                </li>
                <li>
                    <NavLink to="/genre/Drama" activeClassName={ style.active }>DRAMA</NavLink>
                </li>
                <li>
                    <NavLink to="/genre/Crime" activeClassName={ style.active }>CRIME</NavLink>
                </li>
                <li style={{ flexGrow: 10 }}></li>
                <li style={{ paddingRight: 0 }}>
                    <SortFilms />
                </li>
            </ul>
        </nav>
    );
}

let mapStateToProps = (state) => ({
    filmsList: state.films.filmsList
})

const NavContainer = compose(
    withRouter,
    connect(null, { changeFilmsList })
)(Nav)

export default NavContainer;