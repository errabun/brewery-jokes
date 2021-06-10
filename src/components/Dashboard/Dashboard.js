import './Dashboard.css'
import { Component } from 'react'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  render() {
    return (
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
    )
  }
}
