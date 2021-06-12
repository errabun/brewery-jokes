import './Favorites.css'

const Favorites = ({favBrews, favJokes}) => {

  const mapFavBrews = () => {
    if (favBrews.length) {
      return favBrews.map(brew => {
        return (
          <li id={brew.id}>{brew.name} in {brew.city}, {brew.state}</li>
        )
      })
    }
    return 'No favorite breweries yet!'
  }

  const mapFavJokes = () => {
    if (favJokes.length) {
      return favJokes.map(joke => {
        return (
          <div className='joke'>
            <li id={Date.now()}>{joke}</li>
            <button className='remove'>Remove from favorites</button>
          </div>
        )
      })
    }
    return 'No favorited jokes yet!'
  }

  return (
    <div className='fav-container'>
      <div className='brew-fav'>
        <h2>Favorite Breweries</h2>
          <ul>
            {mapFavBrews()}
          </ul>
      </div>
      <div className='joke-fav'>
        <h2>Favorite Jokes</h2>
          <ul>
            {mapFavJokes()}
          </ul>
      </div>
    </div>
  )
}

export default Favorites
