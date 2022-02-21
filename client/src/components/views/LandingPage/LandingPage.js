import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import {API_URL, API_KEY, IMAGE_BASE_URL} from'../../Config';
import MainImage from '../Sections/MainImage';

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(()=>{
        const endpoint = '${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1';
        fetch(endpoint)
        .then(response=>response.json())
        .then(response=> {
            console.log(response)

            setMovies([response.results])
            setMainMovieImage(response.results[0])    
        })
    }, [])

    return (
        <div style={{width: '100%', margin: '0'}}>
            {/*main image*/}
            <MainImage image={'${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}'}/>

            <div style = {{width: '85%', margin: '1rem auto'}}>
                <h2 align="center">movies by latest</h2>
                <hr />
                {/*movie grid cards*/}
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button>load more</button>
            </div>


        </div>
    )
}

export default LandingPage
