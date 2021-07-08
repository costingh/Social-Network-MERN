import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./chatOnlineStyle";

function ChatOnline({ classes, onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
        console.log(onlineFriends);
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `/conversations/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.chatOnline}>
            {onlineFriends.map((o) => (
                <div
                    className={classes.chatOnlineFriend}
                    onClick={() => handleClick(o)}
                >
                    <div className={classes.chatOnlineImgContainer}>
                        <img
                            className={classes.chatOnlineImg}
                            src={
                                o?.profilePicture
                                    ? PF + o.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                        />
                        <div className={classes.chatOnlineBadge}></div>
                    </div>
                    <span className={classes.chatOnlineName}>
                        {o?.username}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default withStyles(styles)(ChatOnline);
