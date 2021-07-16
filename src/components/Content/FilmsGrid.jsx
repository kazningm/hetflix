import React from "react";
import style from "./FilmsGrid.module.css";
import FilmCard from "../FilmCard/FilmCard";

const FilmGrid = () => {
    return (
        <div className={ style.filmGrid }>
            { [1,2,3,4,5].map((a) => <FilmCard key={ a } />) }
        </div>
    );
}

export default FilmGrid;