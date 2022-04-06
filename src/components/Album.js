import { Link } from "react-router-dom";

function Album({ data }) {
    const { id, artistName, artistUrl, artworkUrl100, name } = data
    // console.log("name: ", name)
    return (
        <div className="Album">
            <Link to={`albums/` + id}>
                <img src={artworkUrl100} />
                <h3>{name}</h3>
                <p>{artistName}</p>
            </Link>
        </div>
    )


}

export default Album;