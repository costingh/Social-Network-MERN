import Message from "../../components/message/Message";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./centerChatPanelStyle";
import { useEffect, useRef } from "react";
function CenterChatPanel({classes, currentChat, messages, setNewMessage, newMessage, handleSubmit, user, contact}) {
    const scrollRef = useRef();

    /* useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
 */
    return (
        <div className={classes.chatBox}>
            <div className={classes.chatBoxWrapper}>
                {currentChat ? (
                    <>
                        <div className={classes.chatBoxTop}>
                            {messages.map((m) => (
                                <div ref={scrollRef}>
                                    <Message
                                        key={m._id}
                                        message={m}
                                        own={m.sender === user._id}
                                        user={user}
                                        contact={contact}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={classes.chatBoxBottom}>
                            <div className={classes.typeMsg}>
                                <form
                                    id="chat-form"
                                    className={classes.form}
                                >
                                    <input
                                        id="msg"
                                        type="text"
                                        placeholder="Type a message here..."
                                        required
                                        autoComplete="off"
                                        className={classes.input}
                                        onChange={(e) =>
                                            setNewMessage(
                                                e.target.value
                                            )
                                        }
                                        value={newMessage}
                                    />
                                    <Button
                                        className={classes.send}
                                        aria-label="Send"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        <SendIcon />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <span className={classes.noConversationText}>
                        Open a conversation to start a chat.
                    </span>
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(CenterChatPanel);