import { withStyles } from "@material-ui/core/styles";
import { styles } from "./rightChatPanelStyle";
import ChatOnline from "../../components/chatOnline/ChatOnline";

function RightChatPanel({classes, onlineUsers, userId, setCurrentChat}) {
    return (
        <div className={classes.chatOnline}>
            <div className={classes.chatOnlineWrapper}>
                <ChatOnline
                    onlineUsers={onlineUsers}
                    currentId={userId}
                    setCurrentChat={setCurrentChat}
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(RightChatPanel);