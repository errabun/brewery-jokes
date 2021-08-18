import './Recap.css'
import PropTypes from 'prop-types'
import MapContainer from '../MapContainer/Map'
import Geocode from 'react-geocode'
import { useState, useEffect } from 'react'

const Recap = ({ selectedBrewery, selectedJoke}) => {

  const [brewLat, setBrewLat] = useState('')
  const [brewLng, setBrewLng] = useState('')

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
  Geocode.setLanguage('en')
  Geocode.setRegion('us') 
  Geocode.setLocationType('ROOFTOP')
  Geocode.enableDebug()
  
  useEffect(() => {
    Geocode.fromAddress(selectedBrewery.name)
      .then(resp => {
          setBrewLat(resp.results[0].geometry.location.lat)
          setBrewLng(resp.results[0].geometry.location.lng)
        })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='recap-container'>
      <h1 className='cheers'>Cheers, have fun!</h1>
      <h3 className='user-selections'>You're headed to <a href={selectedBrewery.url}><em>{selectedBrewery.name}</em></a> located at {selectedBrewery.street} in {selectedBrewery.city}, {selectedBrewery.state}</h3>
      <div>
        <MapContainer 
          brewLat={brewLat}
          brewLng={brewLng}
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
