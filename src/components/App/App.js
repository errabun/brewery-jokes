import './App.css';
import Jokes from '../Jokes/Jokes'
import Breweries from '../Breweries/Breweries'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Dashboard from '../Dashboard/Dashboard'
import Favorites from '../Favorites/Favorites'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {

  return (
    <div>
    <main>
      <Header />
      <Switch>
        <Route
          path = '/breweries/:zip'
          render={({ match }) => {
            const { zip } = match.params
            return <Breweries zipQuery={zip} />
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
  );
}

export default App;
