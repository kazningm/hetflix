import React from "react";
import style from "./SearchBlock.module.css";
import logo from "./../../logo.png";
import { NavLink} from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeSearchValue, changeFilmsList, getFilms } from "./../../reducers/films_reducer";

const SearchBlock = (props) => {  
    let changeSearchValue = (event) => {
        props.changeSearchValue(event.target.value);
    }

    let search = () => {
        // props.getFilms("Search", props.sortBy, props.search_value)
    }

    return (
        <div className={ style.rootWrapper }>
            <div className={ style.root }>
                <div className={ style.addMovieDiv }>
                    <NavLink to="/#">
                        <img className={ style.logo } src={ logo } alt="" />
                    </NavLink>
                    <NavLink to="/add">
                        <div className={ style.addMovieButton }>+ ADD MOVIE</div>
                    </NavLink>
                </div>   
                <div className={ style.searchDiv }>
                    <div className={ style.text }>FIND YOU MOVIE</div>
                    <div className={ style.inputDiv }>
                        <input className={ style.customInput } type="text" 
                               value={ props.search_value }
                               placeholder={ props.placeholder } 
                               onChange={ changeSearchValue } />
                        <NavLink to={ `/search/${ props.search_value }` }>
                            <div className={ style.searchMovieButton }
                                 onClick={ search } >SEARCH</div>
                        </NavLink>
                    </div>
                </div>             
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({ 
    search_value: state.films.search_value,
    placeholder: state.films.placeholder,
    sortBy: state.films.sortBy
})

let mapDispatchToProps = {
    changeSearchValue,
    changeFilmsList,
    getFilms
}

const SearchBlockContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchBlock);

export default SearchBlockContainer;