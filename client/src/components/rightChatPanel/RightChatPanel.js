import { withStyles } from "@material-ui/core/styles";
import { styles } from "./rightChatPanelStyle";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import ContactInfo from "../contactInfo/ContactInfo";

function RightChatPanel({classes, onlineUsers, userId, setCurrentChat, currentChat}) {
    return (
        <div className={classes.chatOnline}>
            <ContactInfo
                currentChat={currentChat}
                userId={userId}
            />
            {/* <div className={classes.chatOnlineWrapper}>
                <ChatOnline
                    onlineUsers={onlineUsers}
                    currentId={userId}
                    setCurrentChat={setCurrentChat}
                />
            </div> */}
        </div>
    )
}

export default withStyles(styles)(RightChatPanel);