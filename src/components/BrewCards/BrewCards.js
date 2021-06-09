import './BrewCards.css'

const BrewCards = ({name, address, url, id }) => {

  return (
    <div >
      <h3>{name}</h3>
      <p>{address.join(', ')}</p>
      {!url &&
        <p>Couldn't find a webpage for this brewery!</p>}
      <a href={url}>{url}</a>
    </div>
  )
}

export default BrewCards
