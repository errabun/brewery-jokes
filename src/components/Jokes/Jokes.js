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

  componentDidMount() {
    fetchJoke()
      .then(data => {
        this.setState({ curJoke: data.joke })
      })
  }

  render() {
    return (
      <div>
        {this.state.curJoke}
      </div>
    )
  }
}

export default Jokes;
