import React, { useState } from 'react'
import "./row.css"
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { doc, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { async } from '@firebase/util';


function Movie({item}) {
    const[Like, setLike] = useState(false)
    const[saved, setSaved] = useState(false)
    const {user} = UserAuth()

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
      if(user?.email) {
        setLike(!Like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          }) 
        })
      } else {
        alert("please sign in")
      }
    }


  return (
    <div className='movie-cont'>


         <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} /> 
         <div className='mov-hover'>
            <div className='backshadow' />
            <div className='movie-title'>
                {item.title}
            </div>
            <p className='hearts-cont' onClick={saveShow}>
                {Like ? <FaHeart  className='heart' /> : <FaRegHeart className='heart' />}
            </p>
         </div>
    </div>
  )
}

export default Movie