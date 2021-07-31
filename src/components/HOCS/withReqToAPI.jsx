import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { NOT_SORTED, ALL } from "./../../reducers/films_reducer";

export const withReqToAPI = (Component) => {
    const NewComponent = (props) => {
        
        let params = useParams();
        const genre = params.genre || ALL; 
        const search = params.search || "";
        let location = useLocation();
        let query = new URLSearchParams(location.search); 
        for (let k of query.keys()) query.delete(k);
        query.set("sort", props.sort);
        window.history.pushState(null,"", "?" + query.toString());        
        const sort = query.get("sort") || NOT_SORTED;

        const filmsList = useState(props.filmsList)[0];
        useEffect(() => {
            props.getFilms(genre, sort, search)      
        }, [filmsList, genre, sort, search])

        return (
            <Component {...props} />
        )
    }

    return NewComponent;
}
