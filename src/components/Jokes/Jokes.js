import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Jokes.css'
import { fetchJoke } from '../../apiCalls'
import PropTypes from 'prop-types'


class Jokes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curJoke: ''
    }
  }

  componentDidMount() {
    fetchJoke()
      .then(data => this.setState({ curJoke: data.joke }))
      .catch(error => this.setState({ error: "Couldn't get any jokes, please try again!"}))
  }

  render() {
    return (
      <div>
      {!this.state.error && this.state.curJoke &&
        <div className='joke-container'>
          <h2 className='step'>Step 3: Find a good joke</h2>
          <p className='cur-joke'>{this.state.curJoke}</p>
          <div className='button-wrap'>
            <button onClick={() => {this.componentDidMount()}} className='fetch-joke'>Get another joke</button>
            <Link to='/recap' >
              <button onClick={() => {this.props.addSelection(this.state.curJoke, 'selectedJoke')}} className='joke-select'>I'll use this joke</button>
            </Link>
            <button onClick={() => {this.props.addToFavorites('favJokes', {joke: this.state.curJoke, id: Date.now()})}} className='joke-fav'>Add to favorites</button>
          </div>
        </div>
      }
      {this.state.error &&
        <div className='msg-container'>
          <h1 className='joke-error'>{this.state.error}</h1>
          <button className='return-home' onClick={() => {window.location.href="/"}}>Return Home</button>
        </div>
      }
      </div>
    )
  }
}

export default Jokes;

Jokes.propTypes = {
  addToFavorites: PropTypes.func,
  addSelection: PropTypes.func
}
