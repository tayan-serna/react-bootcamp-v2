import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <li className="App_card">
      <img
        src={props.src}
        className="App_card_image"
        data-testid="card-image"
      />
      <div className="App_card_info">
        <span className="App_card_name" data-testid="card-name">
          {props.name}
        </span>
        {props.favorite ? (
          <span className="App_card_favorite" data-testid="card-favorite">
            ⭐
          </span>
        ) : null}
      </div>
    </li>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  favorite: PropTypes.bool
};

Card.defaultProps = {
  src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  favorite: false
};

export default Card;
