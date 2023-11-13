import React from 'react';
import './MenuPage.css';
import ChatListButton from '../../navigation/MenuPageButtons/ChatRoomListButton.js'
import TokenButton from '../../navigation/TokenButton/TokenButton.js';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Iotum Sample Apps</h1>
      <ChatListButton />
      <TokenButton position="left"/>
    </div>
  );
}

export default Menu;