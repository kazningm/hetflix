import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { openActionList } from "./../../reducers/action_list_reducer";
import { changeFilmInfo } from "./../../reducers/forms_reducer";
import PropTypes from "prop-types";
import style from "./FilmCard.module.css";

const FilmCard = (props) => {
    let filmInfo = props.filmInfo;
    let src = filmInfo.poster_path;
    let name = filmInfo.title;
    let date = filmInfo.release_date;
    let genres = filmInfo.genres.join(", ");

    let openActionList = (event) => {
        props.changeFilmInfo(filmInfo);
        props.openActionList(event.pageY, event.pageX);
    }

    return (
        <div className={ style.rootCard }>
            <div className={ style.Card }>
                <img className={ style.filmImg } src={ src } alt="" />
                <div className={ style.threeDots } onClick={ openActionList } >&#8942;</div>
            </div>
            <div className={ style.descDiv }>
                <div className={ style.filmName }>{ name }</div>
                <div className={ style.filmYear }>{ date }</div>
            </div>
            <div className={ style.filmGenre }>{ genres }</div>            
        </div>
    );
}

let mapStateToProps = (state) => ({

})

const FilmCardContainer = compose(
    connect(mapStateToProps, { openActionList, changeFilmInfo })
)(FilmCard);

export default FilmCardContainer;

FilmCard.propTypes = {
    filmInfo: PropTypes.object,
    openActionList: PropTypes.func
}