import './Dashboard.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'

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

  render() {
    return (
      <div className='input-form' >
        <h1 className='welcome'>Welcome to Brew n' Jokes</h1>
        <h2 className='step'>Step 1: Find breweries near you</h2>
        <input
          type='number'
          placeholder='Enter zip'
          name='zip'
          value={this.state.query}
          onChange={event => this.zipInput(event)}
          className='dash zip-input'
          required='required'
        />
        <Link to={`/breweries/${this.state.query}`}>
          <button className='dash button'>Find breweries</button>
        </Link>
      </div>
    )
  }
}

export default Dashboard
