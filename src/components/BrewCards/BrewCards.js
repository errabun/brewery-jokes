import './BrewCards.css'

const BrewCards = ({name, address, url, id }) => {

  return (
    <div >
      <h3>{name}</h3>
      <p>{address.join(', ')}</p>
      <a href={url}>{url}</a>
    </div>
  )
}

export default BrewCards
