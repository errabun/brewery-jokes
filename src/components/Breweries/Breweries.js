import { Component } from 'react'
import BrewCards from '../BrewCards/BrewCards'
import { fetchBreweries } from '../../apiCalls'
import './Breweries.css'

class Breweries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: this.props.fetchedBreweries
    }
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
        />
      )
    })
  }

  render() {
    return (
      <div>
        <section>{this.foundBreweries()}</section>
      </div>
    )
  }
}

export default Breweries
