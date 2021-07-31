import React, { useEffect, useState } from "react";
import style from "./FilmInfo.module.css";
import loupe from "./../../loupe.svg";
import logo from "./../../logo.png";
import { ReactSVG } from "react-svg";
import { NavLink, useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { changeFilmInfo } from "../../reducers/films_reducer";

const FilmInfo = (props) => {

    const params = useParams();
    let id = params.id;
    console.log(id)

    // let [filmInfo, changeFilmInfo] = useState({});
    let filmInfo = props.filmInfo;

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/movies/${id}`).then(data => {
                props.changeFilmInfo(data.data)
            })
        }
    }, [id])

    return (
        <div className={style.root}>
            <div className={style.filmInfoWrapper}>
                <div className={style.searchDiv}>
                    <div className={style.home}>
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className={style.search}>
                        <NavLink to="/search">
                            <ReactSVG src={loupe} />
                        </NavLink>
                    </div>
                </div>
                <div className={ style.filmInfoDiv }>
                    <div className={ style.poster }>
                        <img src={ filmInfo.poster_path } alt="" />
                    </div>
                    <div className={ style.info }>
                        <div className={ style.title }>
                            <div className={ style.titleText }> { filmInfo.title } </div>
                            <div className={ style.rating }> { filmInfo.vote_average } </div>
                        </div>
                        <div className={ style.tagline }>
                            { filmInfo.tagline }
                        </div>
                        <div className={ style.date }>
                            <div className={ style.release_date }> { (filmInfo.release_date || "9999").split("-")[0]  } </div>
                            <div className={ style.runtime }> { filmInfo.runtime } minute</div>
                        </div>
                        <div>
                            { filmInfo.overview }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    filmInfo: state.films.filmInfo
})

const FilmInfoContainer = compose(
    connect(mapStateToProps, { changeFilmInfo })
)(FilmInfo)

export default FilmInfoContainer;