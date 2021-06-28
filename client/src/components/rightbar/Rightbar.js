import './rightbar.css'

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Andrew Huighmann</b> and <b>2 other friends </b>have a birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/1.jpg" alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Andrew</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
