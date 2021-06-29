import React from 'react'

function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={`/assets/${user.profilePicture}`} alt="" className="rightbarProfileImg"/>
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online
