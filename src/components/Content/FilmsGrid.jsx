import style from "./FilmsGrid.module.css";
import FilmCard from "../FilmCard/FilmCard";
import { connect } from "react-redux";
import { changeFilmsList, getFilms, changeSort, changeGenre } from "./../../reducers/films_reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withReqToAPI } from "./../HOCS/withReqToAPI";
import NotFound from "./NotFound";
import Error from "./../Error/Error";
import PropTypes from "prop-types";
import Paginator from "../Paginator/Paginator";

const FilmGrid = (props) => {

    if (props.isErrorShow) {
        return <Error />
    }
    if (props.isFilmsShow) {
        if (props.filmsList.length === 0) return <NotFound />
        else return (
            <>  
                <div className={style.countFilms}>
                    {props.filmsList.length} FILMS FOUND
                </div>
                <Paginator />
                <div className={style.filmGrid}>
                    {props.filmsList.map(film => <FilmCard filmInfo={film} key={film.id} />)}
                </div>                
                <Paginator />
            </>
        )
    }

    return null
}

let mapStateToProps = (state) => ({
    filmsList: state.films.filmsList,
    sort: state.films.sort,
    isFilmsShow: state.films.isFilmsShow,
    isErrorShow: state.films.isErrorShow,
    countDeletedFilms: state.films.countDeletedFilms,
    countAddedFilms: state.films.countAddedFilms,
    countEditedFilms: state.films.countEditedFilms,
    search: state.films.search
})

let mapDispatchToProps = {
    changeFilmsList,
    getFilms,
    changeSort,
    changeGenre
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

