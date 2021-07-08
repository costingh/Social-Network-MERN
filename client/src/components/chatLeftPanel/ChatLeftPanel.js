import Contact from "../../components/contact/Contact";
import SearchUser from "../../components/search/SearchUser";
import { withStyles } from "@material-ui/core/styles";

export const styles = {
    chatMenu: {
        flex: "3",
        paddingRight: "30px",
    },
    chatMenuWrapper: {
        padding: "10px",
        height: "100%",
        background: "#202a41",
    },
    header: {
        fontSize: '23px',
        color: '#cdd1d9',
        margin: '20px auto',
        textAlign: 'center'
    },
    "@media screen and (max-width: 768px)": {
        __expression__: "screen and (max-width: 768px)",
        chatMenu: {
            flex: "1",
        },
    },
};

function ChatLeftPanel({ classes, conversations, setCurrentChat, user, currentChat }) {
    return (
        <div className={classes.chatMenu}>
            <div className={classes.chatMenuWrapper}>
                <h1 className={classes.header}>Conversation</h1>
                <SearchUser listOfContacts={conversations} />
                <div className={classes.conversationsPanel}>
                    {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Contact
                                key={c._id}
                                conversation={c}
                                currentUser={user}
                                currentChat={currentChat}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(ChatLeftPanel);
