import React from "react";
import style from "./SortFilms.module.css";

import { changeSort } from "./../../../reducers/films_reducer";
import { connect } from "react-redux";

const SortFilms = (props) => {
    let changeSort = (event) => {
        props.changeSort(event.target.value)
    }
    return (
        <>
            <label htmlFor="sort" className={ style.sortLabel } >SORT BY</label>
            <select name="sort" id="" className={ style.sortSelect } onChange={ changeSort }>
                { props.sortList.map(s => <option value={ s } key={ s }> { s } </option>) }
            </select>
        </>
    );
}

let mapStateToProps = (state) => ({
    sortList: state.films.sortList
})

const ContainerSortFilms = connect(mapStateToProps, { changeSort })(SortFilms)


export default ContainerSortFilms;
