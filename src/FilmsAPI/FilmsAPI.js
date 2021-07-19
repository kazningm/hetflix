import axios from "axios";
import _ from "lodash";

export let getFilmsByGenre = async (genre, changeFilmsList) => {
    await axios.get("http://localhost:4000/movies").then(data => {
        let films = data.data.data;
        // console.log(films);
        if (genre !== "All")
            changeFilmsList(films.filter(film => _.includes(film.genres, genre)));
        else 
            changeFilmsList(films);
    })
}