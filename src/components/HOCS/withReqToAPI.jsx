import { useState, useEffect } from "react";
import _ from "lodash";

let parseUrl = (url) => {
    if (url.startsWith('/all')) return "All";
    if (url.startsWith('/family')) return "Family";
    if (url.startsWith('/action')) return "Action";
    if (url.startsWith('/drama')) return "Drama";
    if (url.startsWith('/crime')) return "Crime";
    if (url.startsWith('/search')) return "Search";

    return "All";
}

export const withReqToAPI = (Component) => {
    const NewComponent = (props) => {
        const genre = parseUrl(props.match.path); 
        const filmsList = useState(props.filmsList)[0];
        const search_value = _.trim(props.match.params.film);
        const sortBy = props.sortBy;
        useEffect(() => {
            props.getFilms(genre, sortBy, search_value)       
        }, [filmsList, genre, sortBy, search_value])

        return (
            <Component {...props} />
        )
    }

    return NewComponent;
}
