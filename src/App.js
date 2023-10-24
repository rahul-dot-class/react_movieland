
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import $ from 'jquery';
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=246f575a";
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchLable, setSearchLable] = useState("");


    const serchMovies = async (title) => {
        if (title.trim() != "") {
            try {
                const response = await fetch(`${API_URL}&s=${title}`)
                if (response.ok) {
                    const data = await response.json();
                    setMovies(data.Search);
                }
            } catch (error) {
                console.log("error", error);
            }
        } else {
            alert("Enter movie name to search the result ")
        }
    }

    useEffect(() => {
        console.log("useEffect is called");
        serchMovies("Spiderman")
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input id="searchId" onChange={(event) => setSearchLable(event.target.value)} type="text" placeholder="Enter Movie name here"></input>
                <img src={SearchIcon} alt="Search" onClick={() => serchMovies(searchLable)} />
            </div>
            {
                Array.isArray(movies) && movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>)
                    :
                    (<div className="empty"> <h1>No Details Fonund</h1></div>)
            }
        </div >

    );
}
export default App;
