import { Component } from 'react'
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

  handleAddFavClick() {
    return this.props.addToFavorites('favJokes', this.state.curJoke)
  }

  render() {
    return (
      <div className='joke-container'>
        <h2>Step 2: Find a good joke</h2>
        <p>{this.state.curJoke}</p>
        <button onClick={() => {this.componentDidMount()}}>Get another joke</button>
        <button>I'll use this joke</button>
        <button onClick={() => {this.handleAddFavClick()}}>Add to favorites</button>
      </div>
    )
  }
}

export default Jokes;
