import './App.css';
import Jokes from '../Jokes/Jokes'
import Breweries from '../Breweries/Breweries'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Dashboard from '../Dashboard/Dashboard'
import Favorites from '../Favorites/Favorites'
import Recap from '../Recap/Recap'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      favBreweries: [],
      favJokes: [],
      selectedBrew: '',
      selectedJoke: ''
    }
  }

  addToFavorites = (state, data) => {
    return this.setState({[state]: [...this.state[state], data]})
  }

  addSelection = (data, state) => {
    return this.setState({ [state]: data })
  }

  removeFromFavs = (event, state) => {
    const filteredFavs = this.state[state].filter(selected => selected.id !== parseInt(event.target.id))
    this.setState({ [state]: filteredFavs })
  }

  render() {
    return (
      <div>
      <main>
      <Header />
      <Switch>
        <Route
          path = '/breweries/:zip'
          render={({ match }) => {
            const { zip } = match.params
            return <Breweries zipQuery={zip} addToFavorites={this.addToFavorites} addSelection={this.addSelection}
        />
        }}
        />
        <Route
          path = '/jokes'
          render={() => {
            return <Jokes addToFavorites={this.addToFavorites} addSelection={this.addSelection} />
          }}
        />
        <Route
          path = '/favorites'
          render={() => {
            return <Favorites favBrews={this.state.favBreweries} favJokes={this.state.favJokes} removeFromFavs={this.removeFromFavs} />
          }}
        />
        <Route
          path='/recap'
          render={() => {
            return <Recap selectedBrewery={this.state.selectedBrew} selectedJoke={this.state.selectedJoke}/>
          }}
        />
        <Route
          path = '/'
          component={Dashboard}
        />
        <Redirect to = '/' />
      </Switch>
      <Footer />
      </main>
      </div>
    )
  }
}

export default App;
