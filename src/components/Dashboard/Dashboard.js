import './Dashboard.css'
import { Component } from 'react'
import { fetchBreweries } from '../../apiCalls'
import { Link } from 'react-router-dom'
import Breweries from '../Breweries/Breweries'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  zipInput = event => {
    this.setState({ query: event.target.value })
  }

  getQuery = event => {
    event.preventDefault()
    const zipQuery = this.state.query
    fetchBreweries(zipQuery)
      .then(data => {
        <Breweries
          fetchedBreweries = {data}
        />
      })
      .catch(error => this.setState({ error: error }))
    this.setState({ query: '' })
  }

  render() {
    return (
      <div className='input-form'>
        <h1> Welcome to Brew n' Jokes</h1>
        <h2> Step 1: Find breweries near you</h2>
        <input
          type='text'
          placeholder='Enter zip'
          name='zip'
          value={this.state.query}
          onChange={event => this.zipInput(event)}
        />
        <Link to={`/breweries/${this.state.query}`}>
          <button>Find breweries</button>
        </Link>
      </div>
    )
  }
}

export default Dashboard
