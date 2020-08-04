import React from 'react'
import StyledFollowerCard from './styled components/StyledFollowerCard'


function FollowerCard(props) {
    const { follower } = props
    console.log(follower)

    return (
        <StyledFollowerCard>
            <h3>{follower.login}</h3>
            <p>Profile: {follower.html_url}</p>
            <img src={follower.avatar_url} />
            {/* <p>Location: {follower.location}</p>
            <p>Followers: {follower.followers}</p>
            <p>Following: {follower.following}</p>
            <p>Bio: {follower.bio}</p> */}
        </StyledFollowerCard>
    )
}


export default FollowerCard