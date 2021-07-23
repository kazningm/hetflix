import style from "./FilmsGrid.module.css";
import FilmCard from "../FilmCard/FilmCard";
import { connect } from "react-redux";
import { changeFilmsList, getFilms } from "./../../reducers/films_reducer";
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
            <div className={ style.filmGrid }>
                { props.filmsList.map(film => <FilmCard filmInfo={ film } key={ film.id }/>) }
            </div>
        )
    }
        
    return null
}

// const FilmGridReqToAPI = (props) => {
//     const genre = _.capitalize(_.trim(props.match.path, "/"));    
//     const filmsList = useState(props.filmsList)[0]

//     useEffect(() => {
//         getFilmsByGenre(genre, props.changeFilmsList)        
//     }, [filmsList])
    
//     return (
//         <FilmGrid  filmsList={ props.filmsList } />
//     );
// }

let mapStateToProps = (state) => ({
    filmsList: state.films.filmsList,
    sortBy: state.films.sortBy,
    isFilmsShow: state.films.isFilmsShow,
    isErrorShow: state.films.isErrorShow
})

let mapDispatchToProps = { 
    changeFilmsList, 
    getFilms
}

const FilmGridContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withReqToAPI
)(FilmGrid)

export default FilmGridContainer;

FilmGrid.propTypes = {
    filmsList: PropTypes.array,
    sortBy: PropTypes.string,
    isFilmsShow: PropTypes.bool,
    isErrorShow: PropTypes.bool,
    changeFilmsList: PropTypes.func,
    getFilms: PropTypes.func
}

