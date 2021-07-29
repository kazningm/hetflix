import style from "./FilmsGrid.module.css";
import FilmCard from "../FilmCard/FilmCard";
import { connect } from "react-redux";
import { changeFilmsList, getFilms, changeSort } from "./../../reducers/films_reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withReqToAPI } from "./../HOCS/withReqToAPI";
import NotFound from "./NotFound";
import Error from "./../Error/Error";
import PropTypes from "prop-types";

const FilmGrid = (props) => {

    if (props.isErrorShow) {
        return <Error />
    }
    if (props.isFilmsShow) {
        if (props.filmsList.length === 0) return <NotFound />
        else return (
            <>
                <div className={ style.countFilms }> {props.filmsList.length} FILMS FOUND </div>
                <div className={style.filmGrid}>
                    {props.filmsList.map(film => <FilmCard filmInfo={film} key={film.id} />)}
                </div>
            </>
        )
    }

    return null
}

let mapStateToProps = (state) => ({
    filmsList: state.films.filmsList,
    sort: state.films.sort,
    isFilmsShow: state.films.isFilmsShow,
    isErrorShow: state.films.isErrorShow
})

let mapDispatchToProps = {
    changeFilmsList,
    getFilms,
    changeSort
}

const FilmGridContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withReqToAPI
)(FilmGrid)

export default FilmGridContainer;

FilmGrid.propTypes = {
    filmsList: PropTypes.array,
    sort: PropTypes.string,
    isFilmsShow: PropTypes.bool,
    isErrorShow: PropTypes.bool,
    changeFilmsList: PropTypes.func,
    getFilms: PropTypes.func
}

