import React, { useEffect } from "react";
import style from "./SearchBlock.module.css";
import logo from "./../../logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeSearchValue, changeFilmsList, getFilms } from "./../../reducers/films_reducer";
import { showAddForm } from "./../../reducers/forms_reducer";

const useQuery = () => new URLSearchParams(window.location.search);

const SearchBlock = (props) => {
    let query = useQuery();

    const search_value = props.search_value 

    let changeSearchValue = (event) => {
        let search = event.target.value;
        props.changeSearchValue(search); 
        if (search) query.set("search", search);
        else query.delete("search");
        window.history.pushState(null, null, "?" + query.toString())
    }

    let startToSearch = () => {
        // props.changeSearchValue(search_value); 
        // query.set("search", search_value);
        // window.history.pushState("", null, "?" + query.toString())
    }

    let startToSearchByEnter = (event) => {
        if (event.keyCode === 0) startToSearch();
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
                            value={search_value}
                            placeholder={props.placeholder}
                            onChange={changeSearchValue} 
                            // onKeyPress={ startToSearchByEnter } 
                            />
                        <div className={style.searchMovieButton} onClick={ startToSearch }>SEARCH</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    search_value: state.films.search_value,
    placeholder: state.films.placeholder,
    sort: state.films.sort,
    offset: state.films.offset
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