import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
// now receiving info from the jsonplaceholder API service, so I no longer need the robots.js file
// import { robots } from './robots'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // reconfigured the robots file (somehow) using the jasonplaceholder fake API service. Didn't understand this part of the tutorial, but check out the json code output by the url below. Cool stuff...I think.
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const { robots, searchfield } = this.state

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // in case the API loading takes a long time.
    // Notice in the h1 element I use &hellip; to create a horizontal ellipsis.
    if (!robots.length) {
      return <h1>Loading&hellip;</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* created scroll component to keep the search box at the top of the screen as I scroll down the list. */}
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}

export default App
