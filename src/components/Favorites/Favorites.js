import './Favorites.css'

const Favorites = ({ name, street, city, state, url }) => {

  return (
    <div>
      <h2>Favorite Breweries</h2>
        <ul>
          <li>{state}</li>
        </ul>
    </div>
  )
}

export default Favorites
