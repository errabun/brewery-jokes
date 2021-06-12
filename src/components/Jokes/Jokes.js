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
        <h2>Step 2: Find a good joke</h2>
        <p>{this.state.curJoke}</p>
        <button onClick={() => {this.componentDidMount()}}>Get another joke</button>
        <Link to='/recap' >
          <button onClick={() => {this.props.addSelectedJoke(this.state.curJoke)}}>I'll use this joke</button>
        </Link>
        <button onClick={() => {this.props.addToFavorites('favJokes', this.state.curJoke)}}>Add to favorites</button>
      </div>
    )
  }
}

export default Jokes;
