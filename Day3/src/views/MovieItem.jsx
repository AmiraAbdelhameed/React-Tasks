import style from './style.module.css';

const MovieItem = ({ movie }) => {
    return (
        
        
        <div className={style["movie_card"]}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className={style["movie_content"]}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <button>Watch Now</button>
            </div>
        </div>
      
    )
}

export default MovieItem