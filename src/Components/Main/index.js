import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Title from '../Title';
import CardList from '../CardLlist';
import Comments from '../Comments';
import Details from '../Details';

const Index = () => {
  return (
    <Fragment>
      <CardList />
      <Comments />
    </Fragment>
  )
};

function Main() {
  return (
    <div className="App">
      <Title />
      <section className="App_content">
        <Router>
          <Route path="/" exact component={Index} />
          <Route path="/details/:id" component={Details} />
        </Router>
      </section>
    </div>
  );
}

export default Main;
