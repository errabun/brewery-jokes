import { Component } from 'react'
import './Jokes.css'
import { fetchJoke } from '../../apiCalls'

class Jokes extends Component {
  constructor() {
    super()
    this.state = {
      curJoke: ''
    }
  }

  render() {
    return (
      <div>
        Joke displayed here
      </div>
    )
  }
}

export default Jokes; 
