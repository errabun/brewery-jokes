import { Component } from 'react'
import BrewCards from '../BrewCards/BrewCards'
import { fetchBreweries } from '../../apiCalls'
import './Breweries.css'

class Breweries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: []
    }
  }

  componentDidMount() {
    const zipQuery = this.props.zipQuery
    fetchBreweries(zipQuery)
      .then(data => this.setState({ breweries: data }))
      .catch(error => this.setState({ error: 'Couldn\'t fetch any breweries, please try again!' }))
  }


  foundBreweries() {
    return this.state.breweries.map(brew => {
      return (
        <BrewCards
          key={brew.id}
          id={brew.id}
          name={brew.name}
          street={brew.street}
          city={brew.city}
          state={brew.state}
          url={brew.website_url}
          addToFavorites={this.props.addToFavorites}
          addSelection={this.props.addSelection}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {!this.state.breweries.length && !this.state.error &&
          <h1 className='no-brew'>Couldn't find any breweries at this zip!</h1>
        }
        {this.state.error &&
          <div className='msg-container'>
            <h1 className='error-msg user-msg'>{this.state.error}</h1>
            <button className='return-home' onClick={() => {window.location.href="/"}}>Return Home</button>
          </div>
        }
        {!this.state.error && this.state.breweries.length &&
          <div className='brew-wrap'>
            <h1 className='step two'>Step 2: Select a brewery to visit!</h1>
            <section>{this.foundBreweries()}</section>
          </div>
        }
      </div>
    )
  }
}

export default Breweries
