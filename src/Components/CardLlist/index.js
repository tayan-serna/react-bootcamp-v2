import React, { Fragment } from 'react';
import Card from '../Card';

const CardList = () => {
  return (
    <Fragment>
      <div className="App_label-group App_filter">
        <label>Filter:</label>
        <input />
      </div>
      <ul className="App_card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Fragment>
  );
};

export default CardList;
