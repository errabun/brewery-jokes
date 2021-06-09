import { Component } from 'react'
import BrewCards from '../BrewCards/BrewCards'
import { fetchBreweries } from '../../apiCalls'
import './Breweries.css'

class Breweries extends Component {
  constructor() {
    super()
    this.state = {
      breweries: []
    }
  }

  componentDidMount() {
    fetchBreweries()
      .then()
  }

  render() {
    return (
      <div>
        this is where breweries will be displayed
      </div>
    )
  }
}

export default Breweries
