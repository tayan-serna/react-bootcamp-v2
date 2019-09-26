import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from '../Title';
import CardList from '../CardLlist';
import Comments from '../Comments';
import Details from '../Details';
import FavoriteContext from '../Context/FavoriteContext';

const Index = () => {
  return (
    <Fragment>
      <CardList />
      <Comments />
    </Fragment>
  );
};

class Main extends Component {
  state = {
    favoriteCtx: {
      favoriteCharts: {},
      setFavoriteCharts: favoriteCharts => {
        this.setState(state => ({
          ...state,
          favoriteCtx: {
            ...state.favoriteCtx,
            favoriteCharts
          }
        }));
      }
    }
  };
  render() {
    return (
      <div className="App">
        <Title />
        <section className="App_content">
          <Router>
            <FavoriteContext.Provider value={this.state.favoriteCtx}>
              <Route path="/" exact component={Index} />
              <Route path="/details/:id" component={Details} />
            </FavoriteContext.Provider>
          </Router>
        </section>
      </div>
    );
  }
}

export default Main;
