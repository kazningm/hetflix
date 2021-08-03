import { useEffect } from "react";
import { useParams } from "react-router";
import { NOT_SORTED, ALL } from "./../../reducers/films_reducer";

const useQuery = () => new URLSearchParams(window.location.search);

export const withReqToAPI = (Component) => {
    const NewComponent = (props) => {
        
        let countDeletedFilms = props.countDeletedFilms;
        let countAddedFilms = props.countAddedFilms;
        let countEditedFilms = props.countEditedFilms;

        let query = useQuery();

        let params = useParams();
        const genre = params.genre || ALL;
        const search = query.get("search") || "";
        const sort = query.get("sort") || NOT_SORTED;
        const offset = query.get("offset") || 1;

        // console.log(genre, search, sort)

        useEffect(() => {
            props.getFilms(genre, sort, search, offset)      
        }, [genre, search, sort, offset, countDeletedFilms])

        return (
            <Component {...props} />
        )
    }

    return NewComponent;
}
