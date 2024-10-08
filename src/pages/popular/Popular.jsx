import React from "react";
import { useState,useEffect } from "react";
import Card from "../../components/card/Card.jsx";

import './PopularT.css';

const apiKey = process.env.REACT_APP_API_KEY;

function Popular(){

    const [popularlist,setpopularlist]=useState([]);

    const fetch_movies= () => {
        fetch(`https://api.themoviedb.org/3/movie/826510/recommendations?api_key=122293e9a3904e9ebeda9af9e8e71df4`)
        .then(res=>res.json())
        .then(json=>setpopularlist(json.results))
    };

    useEffect(()=>{
        fetch_movies();
    },[]);


    return(
        <div>
            <h1>POPULAR</h1>
            <div className="movies-grid">
                    {popularlist.map((movie) => (
                        <Card
                            key={movie.id}
                            image={movie.poster_path}
                            title={movie.original_title}
                            date={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                        />
                    ))}
                </div>
        </div>
    );
}

export default Popular;