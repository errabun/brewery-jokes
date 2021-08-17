import './Recap.css'
import PropTypes from 'prop-types'
import MapContainer from '../MapContainer/Map'

const Recap = ({ selectedBrewery, selectedJoke}) => {

  console.log(selectedBrewery)

  return (
    <div className='recap-container'>
      <h1 className='cheers'>Cheers, have fun!</h1>
      <h3 className='user-selections'>You're headed to <a href={selectedBrewery.url}><em>{selectedBrewery.name}</em></a> located at {selectedBrewery.street} in {selectedBrewery.city}, {selectedBrewery.state}</h3>
      <div>
        <MapContainer 
          brewery={selectedBrewery}
        />
      </div>
      <h3 className='reminder'>☟  Don't forget to try out the joke you selected  ☟</h3>
      <h4 className='user-joke'><em>"{selectedJoke}"</em></h4>
    </div>

  )
}

export default Recap

Recap.propTypes = {
  selectedBrewery: PropTypes.shape({
    city: PropTypes.string,
    name: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.number
  }),
  selectedJoke: PropTypes.string
}
