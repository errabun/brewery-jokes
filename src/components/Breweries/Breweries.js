import { Component } from 'react'
import BrewCards from '../BrewCards/BrewCards'
import Favorites from '../Favorites/Favorites'
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
      .catch(error => this.setState({ error: error }))
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
          favBreweries={this.props.favBreweries}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Step 2: Select a brewery to visit!</h1>
        {!this.state.breweries.length && !this.state.error &&
          <h1 className='loading'>'Getting nearby breweries...'</h1>
        }
        {this.state.error &&
          <div className='msg-container'>
              <h1 className='error-msg user-msg'>{this.state.error}</h1>
              <button className='return-home' onClick={() => {window.location.href="/"}}>Return Home</button>
          </div>
        }
        {!this.state.error && this.state.breweries.length &&
          <section>{this.foundBreweries()}</section>
        }
      </div>
    )
  }
}

export default Breweries
