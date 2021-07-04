import "./conversations.css";

export default function Conversation() {

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQOJuMI5YQam1C9mIbkHHg1T2KxGJAUNAq8FPLvtBlnKuFIeeSCkv0jcF6pHPDzZ4PuKDq0tDgb5-r8K9Nl1e0'
        alt=""
      />
      <span className="conversationName">John Doe</span>
    </div>
  );
}