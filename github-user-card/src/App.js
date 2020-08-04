import React from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {},
      followersData: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/DeeDowns')
      .then(res => {
        console.log(res.data)
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h1>Github Friends</h1>
        <UserCard userData={this.state.userData}/>
        {/* <Followers /> */}
      </div>
      
    )
  }
}

export default App;
