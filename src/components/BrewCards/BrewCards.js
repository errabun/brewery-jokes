import './BrewCards.css'

const BrewCards = ({name, street, city, state, url, id }) => {

  return (
    <div >
      <h3>{name}</h3>
      {!street &&
        'No address listed for this brewery!'}
      {street && city && state &&
        <p>{street} {city}, {state}</p>}
      {!url &&
        'Can\'t find a website for this brewery!'}
      <a href={url}>{url}</a>
    </div>
  )
}

export default BrewCards
