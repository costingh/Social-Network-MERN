import Topbar from "../../components/topbar/Topbar";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {io} from "socket.io-client";
import { withStyles } from '@material-ui/core/styles';
import {styles} from './messengerStyle'
import Contact from '../../components/contact/Contact';
import SearchUser from "../../components/search/SearchUser";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

function Messenger({classes}) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
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
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getLastMessages = () => {
      try {
        conversations.map( async c => {
          const res = await axios.get("/messages/last-message/" + c._id);
          c.lastMessage = res.data;
        })
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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className={classes.messenger}>
        <div className={classes.chatMenu}>
          <div className={classes.chatMenuWrapper}>
            <h1 className={classes.header}>Conversation</h1>
            <SearchUser listOfContacts={conversations}/>
            <div className={classes.conversationsPanel}>
              {conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Contact key={c._id} conversation={c} currentUser={user} currentChat={currentChat}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.chatBox}>
          <div className={classes.chatBoxWrapper}>
            {currentChat ? (
              <>
                <div className={classes.chatBoxTop}>
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message key={m._id} message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className={classes.chatBoxBottom}>
                <div className={classes.typeMsg}>
                  <form id="chat-form" className={classes.form}>
                      <input
                          id="msg"
                          type="text"
                          placeholder="Type a message here..."
                          required
                          autoComplete="off"
                          className={classes.input}
                          onChange={(e) => setNewMessage(e.target.value)}
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
                  {/* <textarea
                    className={classes.chatMessageInput}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className={classes.chatSubmitButton} onClick={handleSubmit}>
                    Send
                  </button> */}
                </div>
              </>
            ) : (
              <span className={classes.noConversationText}>
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className={classes.chatOnline}>
          <div className={classes.chatOnlineWrapper}>
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Messenger);
