import style from "./FilmsGrid.module.css";
import FilmCard from "../FilmCard/FilmCard";
import { connect } from "react-redux";
import { changeFilmsList, showLoader, hideLoader } from "./../../reducers/films_reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withReqToAPI } from "./HOCS/withReqToAPI";
import NotFound from "./NotFound";

// const FilmGrid = (props) => {
//     return (
//         <div className={ style.filmGrid }>
//             { props.data.map(film => <FilmCard filmInfo={ film } key={ film.id } />) }
//         </div>
//     );
// }

// const FilmGridContainer = () => {
//     const [data, changeData] = useState([])
//     useEffect(() => {
//         if (data.length === 0) {
//             axios.get("http://localhost:4000/movies").then(data => {
//                 changeData(data.data.data);
//             })
//         }
//     })

//     return (
//         <FilmGrid data={ data }/>
//     )
// }
///////////////////////////////////////////////////////////////////////////////////////////
// const FilmGrid = (props) => {
//     const data = useState(props.data)[0];

//     useEffect(() => {
//         axios.get("http://localhost:4000/movies").then(data => {
//             props.changeFilmsList(data.data.data);
//         })
//     }, [data])

//     return (
//         <div className={ style.filmGrid }>
//             { props.data.map(film => <FilmCard filmInfo={ film } key={ film.id } />) }
//         </div>
//     );
// }

// let mapStateToProps = (state) => ({
//     data: state.films.filmsList
// })

// const FilmGridContainer = connect(mapStateToProps, { changeFilmsList })(FilmGrid)
/////////////////////////////////////////////////////////////////////////////////////////////

const FilmGrid = (props) => {
    if (props.filmsList.length !== 0) {
        return (
            <div className={ style.filmGrid }>
                { props.filmsList.map(film => <FilmCard filmInfo={ film } key={ film.id }/>) }
            </div>
        )
    }
    return <NotFound />
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
    filmsList: state.films.filmsList
})

const FilmGridContainer = compose(
    connect(mapStateToProps, { changeFilmsList, showLoader, hideLoader }),
    withRouter,
    withReqToAPI
)(FilmGrid)

export default FilmGridContainer;