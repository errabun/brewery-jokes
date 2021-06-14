import './BrewCards.css'
import { Link } from 'react-router-dom'

const BrewCards = ({name, street, city, state, url, id, addToFavorites, addSelection }) => {

  return (
    <>
      <div className='brew-info'>
        <h3 className='brew-name'>{name}</h3>
        {!street &&
          'No address listed for this brewery!'}
        {street && city && state &&
          <p className='brew-address'><em>{street}</em> {city}, {state}</p>}
        {!url &&
          'Can\'t find a website for this brewery!'}
        <a href={url}>{url}</a>
      </div>
      <div className='brew-buttons'>
        <button onClick={() => addToFavorites( 'favBreweries', { name, street, city, state, url, id })} className='brew-fav'>Add to favorites</button>
        <Link to={`/jokes/${id}`}>
          <button onClick={() => addSelection({ name, street, city, state, url, id }, 'selectedBrew')} className='brew-select'>Select this brewery</button>
        </Link>
      </div>
    </>
  )
}

export default BrewCards
