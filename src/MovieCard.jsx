import React from "react";

const MovieCard = function ({ movie }) {
    if (movie !== undefined)
        return (<div className="movie">
            <div>
                <p>{movie.title}</p>
            </div>
            <div>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
        </div>);
    else return (<p>loading ...</p>)
};
export default MovieCard;