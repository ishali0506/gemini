import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

const Sidebar = () => {

const [extended , setExtended]=useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img  src={assets.add_icon} alt="" />
          {extended ? <p>new chat</p> : null}
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            {extended ? <p>What is react...</p> :null}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.help_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> :null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ?  <p>Settings</p> :null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
