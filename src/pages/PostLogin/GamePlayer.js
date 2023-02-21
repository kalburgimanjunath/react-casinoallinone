import React from 'react';
export default function GamePlayer({ game }) {
  const Sidebar = () => {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Gifts</a>
          </li>
          <li>
            <a href="">Add</a>
          </li>
        </ul>
      </div>
    );
  };
  const Player = () => {
    return <div>Player IFrame:{game}</div>;
  };
  return (
    <div>
      <Sidebar />
      {/* iframe here */}
      <Player />
    </div>
  );
}
