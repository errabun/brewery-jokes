import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav className="nav-bar">
      <div className="nav-title">
        <Link to='/' >
          <h1 className='title'>🍺  Brew n' Jokes  🍺 </h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to='/favorites' >
          <h2 className='favorites'>Favorites</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Header
