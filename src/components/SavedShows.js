import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import {updateDoc, onSnapshot, doc} from "firebase/firestore"
import { AiOutlineClose } from 'react-icons/ai';
import "./savedshows.css"
import { async } from '@firebase/util';

function SavedShows() {
    const[movies, setMovies] = useState([])
    const{user} = UserAuth()

    useEffect(()=>{
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        } )
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)

    const deleteShow = async (passID) => {
        try {
            const result = movies.filter((item)=> item.id !== passID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }

    }



  return (
    <div className='savedshow-cont' style={{zIndex: "10"}}>
        {movies.map(item => (
            <div className='accshow' key={item.id}>
                <img src={`https://image.tmdb.org/t/p/original/${item.img}`} />
                <div className='shaddowdiv'>
                    <p>{item.title}</p>
                </div>
                <p className='btndelete' onClick={()=> deleteShow(item.id)} > <AiOutlineClose />  </p>
            </div>
        ))}
    </div>
  )
}

export default SavedShows