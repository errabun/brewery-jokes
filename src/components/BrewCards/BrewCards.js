import './BrewCards.css'

const BrewCards = ({name, street, city, state, url, id, addToFavorites }) => {

  return (
    <>
      <div className='brew-info'>
        <h3 className='brew-name'>{name}</h3>
        {!street &&
          'No address listed for this brewery!'}
        {street && city && state &&
          <p><em>{street}</em> {city}, {state}</p>}
        {!url &&
          'Can\'t find a website for this brewery!'}
        <a href={url}>{url}</a>
      </div>
      <div className='brew-buttons'>
        <button onClick={() => {addToFavorites({name, street, city, state, url})}}>Add to favorites</button>
        <button>Select this brewery</button>
      </div>
    </>
  )
}

export default BrewCards
