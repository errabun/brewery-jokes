import './Favorites.css'

const Favorites = ({favBrews}) => {

  console.log(favBrews)
  const mapFavBrews = () => {
    if (favBrews.length) {
      return favBrews.map(brew => {
        return (
          <li>{brew.name} in {brew.city}, {brew.state}</li>
        )
      })
    } else {
      return 'No favorite breweries yet!'
    }
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
      </div>
    </div>
  )
}

export default Favorites
