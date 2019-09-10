import React from 'react';

const Card = () => {
  return (
    <li className="App_card">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        className="App_card_image"
      />
      <div className="App_card_info">
        <span className="App_card_name">Rick Sanchez</span>
        <span className="App_card_favorite">⭐</span>
      </div>
    </li>
  );
};

export default Card;
