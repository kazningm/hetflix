import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SortFilms from "./SortFilms/SortFilms";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { changeFilmsList } from "../../reducers/films_reducer";

const useQuery = () => new URLSearchParams(window.location.search)

const Nav = (props) => {

    let query = useQuery();

    return (
        <nav>
            <ul className={style.headNav}>
                <li>
                    <NavLink to={"/genre/All?" + query.toString()} activeClassName={ style.active }>ALL</NavLink>
                </li>
                <li>
                    <NavLink to={"/genre/Family?" + query.toString()} activeClassName={ style.active }>FAMILY</NavLink>
                </li>
                <li>
                    <NavLink to={"/genre/Action?" + query.toString()} activeClassName={ style.active }>ACTION</NavLink>
                </li>
                <li>
                    <NavLink to={"/genre/Drama?" + query.toString()} activeClassName={ style.active }>DRAMA</NavLink>
                </li>
                <li>
                    <NavLink to={"/genre/Crime?" + query.toString()} activeClassName={ style.active }>CRIME</NavLink>
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
    filmsList: state.films.filmsList,
    offset: state.films.offset,
    search_value: state.films.search_value
})

const NavContainer = compose(
    withRouter,
    connect(mapStateToProps, { changeFilmsList })
)(Nav)

export default NavContainer;