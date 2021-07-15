import React from "react";
import style from "./SortFilms.module.css";

const SortFilms = () => {
    return (
        <>
            <label htmlFor="sort" className={ style.sortLabel }>SORT BY</label>
            <select name="sort" id="" className={ style.sortSelect }>
                <option value="">RELEASE DATE</option>
                <option value="">RAITING</option>
                <option value="">VIEWS</option>
            </select>
        </>
    );
}


export default SortFilms;
