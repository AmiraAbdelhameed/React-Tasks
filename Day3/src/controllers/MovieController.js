import axios from "axios";
import MovieModel from "../models/movieModel";
class MovieController {
    static async fetchMovies() {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88bb0c7eb3313034322082e95307079f");
            return response.data.results.map((movie) => {
                return new MovieModel(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.poster_path,
                    movie.release_date,
                    movie.vote_average
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export default MovieController