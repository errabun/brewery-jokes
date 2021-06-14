import './Recap.css'

const Recap = ({ selectedBrewery, selectedJoke}) => {

  return (
    <div className='recap-container'>
      <h1 className='cheers'>Cheers, have fun!</h1>
      <h3 className='user-selections'>You're headed to <a href={selectedBrewery.url}><em>{selectedBrewery.name}</em></a> located at {selectedBrewery.street} in {selectedBrewery.city}, {selectedBrewery.state}</h3>
      <h3 className='reminder'>☟  Don't forget to try out the joke you selected  ☟</h3>
      <h4><em>"{selectedJoke}"</em></h4>
    </div>

  )
}

export default Recap
