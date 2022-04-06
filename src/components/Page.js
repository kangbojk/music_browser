import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Page() {
    const { albumId } = useParams();
    const [album, setAlbum] = useState({})

    useEffect(() => {
        const proxyURL = "https://raw.githubusercontent.com/kangbojk/music_browser/master/data/albums.json"

        const fetchData = async () => {
            const { data } = await axios.get(`${proxyURL}`)
            setAlbum(data['feed']['results'].find(a => a.id === albumId))
        }

        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <div className="Page">
            <h1>{album.name}</h1>
            <h2>by {album.artistName}</h2>
            <img src={album.artworkUrl100} />
            <p>Release Date: {album.releaseDate}</p>
            <a href={album.url} target="_blank" rel="noopener noreferrer">Album information</a>
            <a href={album.artistUrl} target="_blank" rel="noopener noreferrer">Follow artist</a>

            <Link to='/'>←back</Link>
        </div>
    )
}

export default Page;