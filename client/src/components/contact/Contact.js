import { useEffect, useState } from "react";
import axios from "axios";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './contactStyle';
import {format} from 'timeago.js'

function Contact({classes, conversation, currentUser, currentChat }) {
    const [user, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [lastMessage, setLastMessage] = useState({
      text: 'No messages sent...',
      createdAt: '2021-06-27T20:40:21.739Z'
    });

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

      getUser().then(() => {
        setTimeout(() => {
          if(conversation.lastMessage.length) {
            setLastMessage({
              text: conversation.lastMessage[0].text,
              createdAt: conversation.lastMessage[0].createdAt
            });
          }
        }, 1000)
      })
    }, [currentUser, conversation]);

    return (
        <div 
            className={currentChat?._id === conversation?._id ? classes.activeContact : classes.contact}
            >
            <div className={classes.left}>
                <img src={
                    user?.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                }></img>
                <div className={classes.text}>
                    <h1>{user?.username}</h1>
                    <p>{lastMessage.text}</p>
                </div>
            </div>
            <div className={classes.right}>
                <MoreHorizIcon className={classes.moreIcon}/>
                <p>{format(lastMessage.createdAt)}</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Contact);
