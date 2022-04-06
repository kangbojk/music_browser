import Album from "./Album";

function Genre({ genre, albums }) {
    return (
        <div>
            <h1>{genre}</h1>

            <div className="Genre">
                {albums.filter(album => album.genres.some(g => g.name === genre)).map(album =>
                    <Album key={album.id} data={album} />)}
            </div>
        </div>
    )

}

export default Genre;