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
        <form id='zipInputForm'>
          <input
            type='number'
            placeholder='Enter 5 digit zip'
            name='zip'
            value={this.state.query}
            onChange={event => this.zipInput(event)}
            className='dash zip-input'
          />
        </form>
        {this.state.query.length === 5 ?
        <Link to={`/breweries/${this.state.query}`}>
          <button className='dash button' form='zipInputForm' >Find breweries</button>
        </Link> :
        <h3>Please enter a 5 digit zip</h3>}
      </div>
    )
  }
}

export default Dashboard
