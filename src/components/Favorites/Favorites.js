import './Favorites.css'

const Favorites = ({ name, street, city, state, url }) => {

  return (
    <div className='fav-container'>
      <div className='brew-fav'>
        <h2>Favorite Breweries</h2>
          <ul>
            {name}
          </ul>
      </div>
      <div className='joke-fav'>
        <h2>Favorite Jokes</h2>
      </div>
    </div>
  )
}

export default Favorites
