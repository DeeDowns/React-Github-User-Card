import React from 'react'
import StyledUserCard from './styled components/StyledUserCard'

function UserCard(props) {
    console.log(props)
    const { userData } = props

    return(
        <StyledUserCard>
            <h2>User Profile</h2>
            <img src={userData.avatar_url} />
            <h3>{userData.name}</h3>
            <h4>Username: {userData.login}</h4>
            <p>Location: {userData.location}</p>
            <p>Profile: <a href={userData.html_url}>{userData.html_url}</a></p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Bio: {userData.bio}</p>
        </StyledUserCard>
    )
}

export default UserCard