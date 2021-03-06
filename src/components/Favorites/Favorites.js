import './Favorites.css'
import PropTypes from 'prop-types'

const Favorites = ({favBrews, favJokes, removeFromFavs}) => {

  const mapFavBrews = () => {
    if (favBrews.length) {
      return favBrews.map(brew => {
        return (
          <div className='brewery'>
            <li id={brew.id} key={brew.id}>{brew.name} in {brew.city}, {brew.state}</li>
            <button className='remove' onClick={event => removeFromFavs(event, 'favBreweries')} id={brew.id}>Remove from favorites</button>
          </div>
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
            <li id={joke.id} key={joke.id}>{joke.joke}</li>
            <button className='remove' id={joke.id} onClick={event => removeFromFavs(event, 'favJokes')}>Remove from favorites</button>
          </div>
        )
      })
    }
    return 'No favorited jokes yet!'
  }

  return (
    <div className='fav-container'>
      <div className='brew-fav'>
        <h2 className='brew-head'>Favorite Breweries</h2>
          <ul className='brew-list'>
            {mapFavBrews()}
          </ul>
      </div>
      <div className='joke-fav'>
        <h2 className='joke-head'>Favorite Jokes</h2>
          <ul className='joke-list'>
            {mapFavJokes()}
          </ul>
      </div>
    </div>
  )
}

export default Favorites

Favorites.propTypes = {
  favBrews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    url: PropTypes.string
  })),
  favJokes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    joke: PropTypes.string
  })),
  removeFromFavs: PropTypes.func
}
