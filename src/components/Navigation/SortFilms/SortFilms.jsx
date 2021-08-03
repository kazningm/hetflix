import React, { useState } from "react";
import style from "./SortFilms.module.css";

import { changeSort } from "./../../../reducers/films_reducer";
import { connect } from "react-redux";

const useQuery = () => new URLSearchParams(window.location.search)

const SortFilms = (props) => {

    let query = useQuery();

    let changeSort = (event) => {
        let sort = event.target.value;
        props.changeSort(sort);
        query.set("sort", sort);
        if (sort !== "-") query.set("sort", sort);
        else query.delete("sort");
        window.history.pushState(null, null, "?" + query.toString());
    }
    return (
        <>
            <label htmlFor="sort" className={ style.sortLabel } >SORT BY</label>
            <select name="sort" id="" className={ style.sortSelect } onChange={ changeSort } defaultValue={ props.sort }>
                { props.sortList.map(s => <option value={ s } key={ s }> { s } </option>) }
            </select>
        </>
    );
}

let mapStateToProps = (state) => ({
    sortList: state.films.sortList,
    sort: state.films.sort,
    filmsList: state.films.filmsList,
    search_value: state.films.search_value
})

const ContainerSortFilms = connect(mapStateToProps, { changeSort })(SortFilms)


export default ContainerSortFilms;
