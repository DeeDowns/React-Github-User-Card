import React from 'react'


function FollowerCard(props) {
    const { follower } = props
    console.log(follower)

    return (
        <div>
            <h2>Follower Card Test</h2>
            <h4>{follower.login}</h4>
            <p>Profile: {follower.html_url}</p>
            <img src={follower.avatar_url} />
            {/* <p>Location: {follower.location}</p>
            
            <p>Followers: {follower.followers}</p>
            <p>Following: {follower.following}</p>
            <p>Bio: {follower.bio}</p> */}
        </div>
    )
}


export default FollowerCard