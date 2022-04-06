function Album({ data }) {
    const { artistName, artistUrl, artworkUrl100, name } = data
    console.log("name: ", name)
    return (
        <div className="Album">
            <img src={artworkUrl100} />
            <h3>{name}</h3>
            <p>{artistName}</p>
        </div>
    )


}

export default Album;