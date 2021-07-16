import React from "react";
import style from "./FilmCard.module.css";

const FilmCard = () => {
    return (
        <div className={ style.rootCard }>
            <div className={ style.Card }>
                <img className={ style.filmImg } src="https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/e448658f-3dca-4acc-8e7f-796fa50bf24a/800x800" alt="" />
                <div className={ style.threeDots }>&#8942;</div>
            </div>
            <div className={ style.descDiv }>
                <div className={ style.filmName }>Focus</div>
                <div className={ style.filmYear } >2020</div>
            </div>
            <div className={ style.filmGenre }>
                Comedy, Drama
            </div>
            
        </div>
    );
}

export default FilmCard;