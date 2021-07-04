import './messenger.css';
import Topbar from '../../components/topbar/Topbar';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';

function Messenger() {
    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input 
                            type="text"
                            placeholder="Search"
                            className="chatMenuInput"
                        />
                        <Conversations/>
                        <Conversations/>
                        <Conversations/>
                        <Conversations/>
                        <Conversations/>
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="write a message..."></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
