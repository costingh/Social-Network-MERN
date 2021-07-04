import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline() {

  
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQOJuMI5YQam1C9mIbkHHg1T2KxGJAUNAq8FPLvtBlnKuFIeeSCkv0jcF6pHPDzZ4PuKDq0tDgb5-r8K9Nl1e0'
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">John Doe</span>
        </div>
    </div>
  );
}