import React from 'react'

function UserCard(props) {
    console.log(props)
    const { userData } = props

    return(
        <div>
            <h2>User Card Test</h2>
            <h3>{userData.name}</h3>
            <h4>{userData.login}</h4>
            <p>Location: {userData.location}</p>
            <p>Profile: {userData.html_url}</p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    )
}

export default UserCard