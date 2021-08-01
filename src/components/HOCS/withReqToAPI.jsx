import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NOT_SORTED, ALL } from "./../../reducers/films_reducer";

const useQuery = () => {
    return new URLSearchParams(window.location.search)
}

export const withReqToAPI = (Component) => {
    const NewComponent = (props) => {
        
        let query = useQuery();

        let params = useParams();
        const genre = params.genre || ALL; 
        const search = query.get("search") || "";
        const sort = query.get("sort") || "-";

        // console.log(genre, search, sort)

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
