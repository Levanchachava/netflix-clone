import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './row.css'
import requests from '../Request'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';


function Row({title, fetchURL, rowID}) {

    const[movies, setMovies] = useState([])

    const Right = () => {
        var slider = document.querySelector('.slider'+ rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const Left = () => {
        var slider = document.querySelector('.slider'+rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    useEffect(()=> {
        axios.get(fetchURL).then(response=>setMovies(response.data.results))
    }, [])
    console.log(movies)

  return (
    <div className='row'>
        <h1>{title}</h1>
        <MdChevronLeft className='leftDir' onClick={Left} />
        <div className={'slider' + rowID} style={{overflowX: "scroll", display:"flex", flexWrap: "nowrap", overflowX: "hidden", scrollBehavior: "smooth" }}>
            {movies.map((item)=>(    
                <Movie key={item.id} item={item} />
            ))}
        </div>
        <MdChevronRight className='rightDir' onClick={Right} />
    </div>
  )
}

export default Row
