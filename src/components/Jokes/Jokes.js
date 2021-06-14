import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Jokes.css'
import { fetchJoke } from '../../apiCalls'


class Jokes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curJoke: ''
    }
  }

  componentDidMount() {
    fetchJoke()
      .then(data => {
        this.setState({ curJoke: data.joke })
      })
  }

  render() {
    return (
      <div className='joke-container'>
        <h2 className='step'>Step 3: Find a good joke</h2>
        <p className='cur-joke'>{this.state.curJoke}</p>
        <div className='button-wrap'>
          <button onClick={() => {this.componentDidMount()}} className='fetch-joke'>Get another joke</button>
          <Link to='/recap' >
            <button onClick={() => {this.props.addSelection(this.state.curJoke, 'selectedJoke')}} className='joke-select'>I'll use this joke</button>
          </Link>
          <button onClick={() => {this.props.addToFavorites('favJokes', {joke: this.state.curJoke, id: Date.now()})}}>Add to favorites</button>
        </div>
      </div>
    )
  }
}

export default Jokes;
