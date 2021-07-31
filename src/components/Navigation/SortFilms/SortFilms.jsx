import React from "react";
import style from "./SortFilms.module.css";

import { changeSort } from "./../../../reducers/films_reducer";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { useRouteMatch } from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(window.location.search)
}

const SortFilms = (props) => {
    
    let query = useQuery();

    let changeSort = (event) => {
        props.changeSort(event.target.value);
        for (let k of query.keys()) query.delete(k);
        query.set("sort", event.target.value);
        window.history.pushState(null,"", "?" + query.toString());
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
    filmsList: state.films.filmsList
})

const ContainerSortFilms = connect(mapStateToProps, { changeSort })(SortFilms)


export default ContainerSortFilms;
