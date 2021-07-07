import { useEffect, useState } from "react";
import axios from "axios";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './contactStyle';

function Contact({classes, conversation, currentUser}) {
    const [user, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
    useEffect(() => {
      const friendId = conversation.members.find((m) => m !== currentUser._id);
  
      const getUser = async () => {
        try {
          const res = await axios("/users?userId=" + friendId);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, conversation]);

    return (
        <div 
            className={classes.contact}
            >
            <div className={classes.left}>
                <img src={
                    user?.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                }></img>
                <div className={classes.text}>
                    <h1>{user?.username}</h1>
                    <p>Last message</p>
                </div>
            </div>
            <div className={classes.right}>
                <MoreHorizIcon className={classes.moreIcon}/>
                <p>3 hours ago</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Contact);
