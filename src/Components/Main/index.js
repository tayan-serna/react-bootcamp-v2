import React from 'react';
import Title from '../Title';
import CardList from '../CardLlist';
import Comments from '../Comments';

function Main() {
  return (
    <div className="App">
      <Title />
      <section className="App_content">
        <CardList />
        <Comments />
      </section>
    </div>
  );
}

export default Main;
