import { useState, useEffect } from "react";
// import { getFilmsByGenre } from "./../../../FilmsAPI/FilmsAPI";
import _ from "lodash";


export const withReqToAPI = (Component) => {
    const NewComponent = (props) => {
        const genre = _.capitalize(_.trim(props.match.path, "/"));    
        const filmsList = useState(props.filmsList)[0]
        const sort = props.sort;
        useEffect(() => {
            props.getFilmsByGenre(genre, sort)       
        }, [filmsList, sort])

        return (
            <Component {...props} />
        )
    }

    return NewComponent;
}