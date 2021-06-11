import './App.css';
import Jokes from '../Jokes/Jokes'
import Breweries from '../Breweries/Breweries'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Dashboard from '../Dashboard/Dashboard'
import Favorites from '../Favorites/Favorites'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      favBreweries: [],
      favJokes: []
    }
  }

  addToFavorites = data => {
    return this.setState({favBreweries: [...this.state.favBreweries, data]})
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
        return <Breweries zipQuery={zip} addToFavorites={this.addToFavorites} />
      }}
      />
      <Route
      path = '/jokes'
      render={() => {
        return <Jokes />
      }}
      />
      <Route
      path = '/favorites'
      render={() => {
        return <Favorites />
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
