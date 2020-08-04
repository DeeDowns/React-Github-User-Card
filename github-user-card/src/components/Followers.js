import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowerCard'
import StyledFollowers from './styled components/StyledFollowers'

class Followers extends React.Component {
    constructor() {
        super()
        this.state = { 
            followersData: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/DeeDowns/followers')
            .then(res => {
            console.log('followers data', res.data)
            this.setState({
                followersData: res.data
            })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <StyledFollowers>
                <h2>Followers Test</h2>
                {this.state.followersData.map(follower => (
                    <FollowerCard follower={follower} key={follower.id} />
                    ))
                }
            </StyledFollowers>
        )
    }
   
}

export default Followers