import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav className="nav-bar">
      <div className="nav-title">
        <img className='logo' src={rottenFruit} alt="rotten fruit logo" />
        <h1>🍺  Brew n' Jokes  🍺</h1>
      </div>
      <div className="nav-title">
        <h2>Breweries</h2>
        <h2>Jokes</h2>
      </div>
    </nav>
  )
}

export default Header
