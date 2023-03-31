import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./main.css"

function Main() {

    const[MovieBan, setMovieBan] = useState({})

    useEffect(()=>{
       axios.get("https://api.themoviedb.org/3/movie/550?api_key=991cd4d3e825f16b966a1b9529e7b422")
                .then(response => setMovieBan(response.data))
    }, [])
    console.log(MovieBan)

  return (
    <div className='main-cont'>
        <div className='background-img'>
            <img src={`https://image.tmdb.org/t/p/original/${MovieBan?.backdrop_path}`} />
        </div>
        <div className='shadow' />
        <div className='movie-info'>
            <h3>{MovieBan.title}</h3>
            <div className='btns'>
                <button style={{cursor: "pointer"}} >Play</button>
                <button style={{background: "transparent", color: "white", border: "1px solid white", cursor: "pointer" }} >Watch Later</button>
            </div>
            <p className='release-date'> Released {MovieBan?.release_date}</p>
            <p className='overview'>{MovieBan.overview?.slice(0, 160)}... </p>
        </div>
    </div>
  )
}

export default Main