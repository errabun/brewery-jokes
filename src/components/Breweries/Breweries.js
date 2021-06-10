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
      .catch(error => this.setState({ error: error }))
    this.setState({ query: '' })
  }

  foundBreweries() {
    console.log(this.state.breweries)
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
