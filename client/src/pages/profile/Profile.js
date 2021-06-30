import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    console.log(PF)
    return (
        <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={`${PF}post/3.jpeg`}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={`${PF}person/7.jpeg`}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">name </h4>
                <span className="profileInfoDesc">description</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar />
            </div>
          </div>
        </div>
      </>
    )
}

export default Profile
