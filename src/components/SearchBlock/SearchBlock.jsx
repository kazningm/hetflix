import React from "react";
import style from "./SearchBlock.module.css";
import logo from "./../../logo.png";
import { NavLink } from "react-router-dom";

const SearchBlock = () => {
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
                    <div class={ style.text }>FIND YOU MOVIE</div>
                    <div className={ style.inputDiv }>
                        <input className={ style.customInput } type="text" placeholder="What do you want to watch?" />
                        <NavLink to="/search">
                            <div className={ style.searchMovieButton }>SEARCH</div>
                        </NavLink>
                    </div>
                </div>             
            </div>
        </div>
    );
}

export default SearchBlock;