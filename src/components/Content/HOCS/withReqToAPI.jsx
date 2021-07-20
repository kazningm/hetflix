import { useState, useEffect } from "react";
// import { getFilmsByGenre } from "./../../../FilmsAPI/FilmsAPI";
import _ from "lodash";


export const withReqToAPI = (Component) => {
    const NewComponent = (props) => {
        const genre = _.capitalize(_.trim(props.match.path, "/"));    
        const filmsList = useState(props.filmsList)[0]

        useEffect(() => {
            props.getFilmsByGenre(genre)       
        }, [filmsList])

        return (
            <Component {...props} />
        )
    }

    return NewComponent;
}