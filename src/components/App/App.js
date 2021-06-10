import './App.css';
import Jokes from '../Jokes/Jokes'
import Breweries from '../Breweries/Breweries'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Dashboard from '../Dashboard/Dashboard'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div>
    <main>
      <Header />
      <Switch>
        <Route
          exact path = '/breweries'
          component={Breweries}
        />
        <Route
          exact path = '/jokes'
          component={Jokes}
        />
        <Route
          exact path = '/'
          component={Dashboard}
        />
      </Switch>
      <Footer />
      </main>
    </div>
  );
}

export default App;
