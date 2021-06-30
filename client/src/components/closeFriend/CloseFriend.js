import React from 'react'

function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="sidebarFriend">
            <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend
