import React from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'
import Followers from './components/Followers'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {},
      // followersData: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/DeeDowns')
      .then(res => {
        console.log('my data', res.data)
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.log(err))
  }

  // componentDidMount() {
  //   axios
  //   .get('https://api.github.com/users/DeeDowns/followers')
  //   .then(res => {
  //     console.log('followers data', res.data)
  //   })
  // }


  render() {
    return (
      <div>
        <h1>Github Friends</h1>
        <UserCard userData={this.state.userData}/>
        <Followers />
      </div>
      
    )
  }
}

export default App;
