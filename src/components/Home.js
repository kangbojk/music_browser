import '../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Genre from './Genre';
import SearchBar from './SearchBar';

function Home() {
    const [albums, setAlbums] = useState([])
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [cache, setCache] = useState([])


    useEffect(() => {

        const filtered = cache.filter(album => {
            return album.artistName.toLowerCase().indexOf(query.toLowerCase()) > -1 || album.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        })

        setAlbums(filtered)

    }, [query])

    useEffect(() => {
        // const apiURL = 'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
        const proxyURL = "https://raw.githubusercontent.com/kangbojk/music_browser/master/data/albums.json"

        const fetchData = async () => {
            setLoading(true)
            const { data } = await axios.get(`${proxyURL}`)
            const album_list = data['feed']['results']
            setAlbums(album_list)
            setCache(album_list)

            const unique_genre = {}
            for (const album of album_list) {
                const genre_list = album['genres'];
                for (const genre of genre_list) {
                    if (!unique_genre[genre.name])
                        unique_genre[genre.name] = true
                }
            }

            setGenres(Object.keys(unique_genre).map((key) => key))
            setLoading(false)
        }

        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <div className="App">

            <h1>
                Filmhub Music
            </h1>
            <SearchBar query={query} setQuery={setQuery} />

            <div >
                {loading ? <>Loading...</> : genres.map(genre => <Genre key={genre} genre={genre} albums={albums} />)}
            </div>

        </div>
    );
}

export default Home;