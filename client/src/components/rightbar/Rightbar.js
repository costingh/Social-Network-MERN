import './rightbar.css'
import {Users} from '../../dummyData';
import Online from '../online/Online';

function Rightbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return (
          <>
            <div className="birthdayContainer">
              <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
              <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
              </span>
            </div>
            <img className="rightbarAd" src={`${PF}ad.png`} alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map((u) => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
          </>
        );
      };

      const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">{user.city}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">{user.from}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">
                  {user.relationship === 1 
                    ? "Single" 
                    : user.relationship === 2
                      ? "Married" 
                      : "-"
                  }
                </span>   
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img
                      src={`${PF}person/1.jpeg`}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Carter</span>
                  </div>
            </div>
          </>
        );
      }; 

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar
