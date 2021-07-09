import Topbar from "../../components/topbar/Topbar";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./messengerStyle";
import ChatLeftPanel from "../../components/chatLeftPanel/ChatLeftPanel";
import CenterChatPanel from "../../components/centerChatPanel/CenterChatPanel";
import RightChatPanel from "../../components/rightChatPanel/RightChatPanel";

function Messenger({ classes }) {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [contact, setContact] = useState(null);
    const { user } = useContext(AuthContext);
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
        console.log('connected....')
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    // add user to an array of Online users
    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                user.followings.filter((f) => users.some((u) => u.userId === f))
            );
        });
    }, [user]);

    // get all conversations and display them in the left panel
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    // get the last message from each conversation
    useEffect(() => {
        const getLastMessages = () => {
            try {
                conversations.map(async (c) => {
                    const res = await axios.get(
                        "/messages/last-message/" + c._id
                    );
                    c.lastMessage = res.data;
                });
            } catch (err) {
                console.log(err);
            }
        };
        getLastMessages();
    }, [conversations]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    // get contact data
    useEffect(() => {
        if(currentChat) {
            const friendId = currentChat.members.find(
                (member) => member !== user._id
            );
    
            const getContact = async () => {
                try {
                    const res = await axios.get(`/users?userId=${friendId}`);
                    setContact(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getContact();
        }
    }, [user._id, currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post("/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };
    

    return (
        <>
            <Topbar />
			<div className={classes.messenger}>
				<ChatLeftPanel
					conversations={conversations}
					setCurrentChat={setCurrentChat}
					user={user}
					currentChat={currentChat}
				/>
				<CenterChatPanel
					currentChat={currentChat}
					messages={messages}
					setNewMessage={setNewMessage}
					newMessage={newMessage}
					handleSubmit={handleSubmit}
					user={user}
                    contact={contact}
				/>
				<RightChatPanel
					onlineUsers={onlineUsers}
					userId={user._id}
					setCurrentChat={setCurrentChat}
                    contact={contact}
				/>
			</div>
        </>
    );
}

export default withStyles(styles)(Messenger);
