import React from "react";
import style from "./SearchBlock.module.css";
import logo from "./../../logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeSearchValue, changeFilmsList, getFilms } from "./../../reducers/films_reducer";
import { showAddForm } from "./../../reducers/forms_reducer";

const SearchBlock = (props) => {

    const search_value = props.search_value;

    let changeSearchValue = (event) => {
        console.log(event.target.value)
        props.changeSearchValue(event.target.value);
    }

    let openAddForm = () => {
        props.showAddForm();
    }

    return (
        <div className={style.rootWrapper}>
            <div className={style.root}>
                <div className={style.addMovieDiv}>
                    <NavLink to="/">
                        <img className={style.logo} src={logo} alt="" />
                    </NavLink>
                    <div className={style.addMovieButton} onClick={openAddForm}>
                        + ADD MOVIE
                    </div>
                </div>
                <div className={style.searchDiv}>
                    <div className={style.text}>FIND YOU MOVIE</div>
                    <div className={style.inputDiv}>
                        <input className={style.customInput} type="text"
                            value={props.search_value}
                            placeholder={props.placeholder}
                            onChange={changeSearchValue} />
                        <NavLink to={`/search/${search_value}`}>
                            <div className={style.searchMovieButton} >SEARCH</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    search_value: state.films.search_value,
    placeholder: state.films.placeholder,
    sort: state.films.sort
})

let mapDispatchToProps = {
    changeSearchValue,
    changeFilmsList,
    showAddForm,
    getFilms
}

const SearchBlockContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchBlock);

export default SearchBlockContainer;