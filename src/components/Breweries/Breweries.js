import { Component } from 'react'
import BrewCards from '../BrewCards/BrewCards'
import { fetchBreweries } from '../../apiCalls'
import './Breweries.css'

class Breweries extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      breweries: []
    }
  }

  zipInput = event => {
    this.setState({ query: event.target.value })
  }

  getQuery = event => {
    event.preventDefault()
    const zipQuery = this.state.query
    fetchBreweries(zipQuery)
      .then(data => console.log(data))
    this.setState({ query: '' })
  }

  render() {
    return (
      <div>
        <h1> Welcome to Brew n' Jokes</h1>
        <h2> Step 1: Find breweries near you</h2>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Enter zip'
            name='zip'
            value={this.state.query}
            onChange={event => this.zipInput(event)}
          />
          <button onClick={event => this.getQuery(event)}>Find breweries</button>
        </form>
      </div>
    )
  }
}

export default Breweries
