import {useState, useEffect} from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useParams } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './profileStyle'

function Profile({ classes }) {
    const [user, setUser] = useState({});
    const username = useParams().username;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data);
        };

        fetchUser();
    }, [username])

    return (
        <>
        <Topbar />
        <div className={classes.profile}>
          <Sidebar />
          <div className={classes.profileRight}>
            <div className={classes.profileRightTop}>
              <div className={classes.profileCover}>
                <img
                  className={classes.profileCoverImg}
                  src={user.coverPicture ? PF+user.coverPicture : PF+"person/noCover.png"}
                  alt=""
                />
                <img
                  className={classes.profileUserImg}
                  src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}
                  alt=""
                />
              </div>
              <div className={classes.profileInfo}>
                <h4 className={classes.profileInfoName}>{user.username} </h4>
                <span className={classes.profileInfoDesc}>
                  {user.desc 
                    ? `~ ${user.desc} ~` 
                    : 'No description available'
                  }
                </span>
              </div>
            </div>
            <div className={classes.profileRightBottom}>
              <Feed username={username} />
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </>
    )
}

export default withStyles(styles)(Profile);
