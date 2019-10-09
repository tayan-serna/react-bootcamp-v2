import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Card from '../Card';
import Filter from '../Filter';
import FavoriteContext from '../Context/FavoriteContext';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';
class CardList extends Component {
  state = {
    filterValue: '',
    filteredCharacterList: [],
    characterList: [],
    loading: true
  };

  static contextType = FavoriteContext;

  componentDidMount() {
    axios.get(RickAndMortyAPI).then(({ data: { results } }) => {
      this.setState({
        characterList: results,
        filteredCharacterList: results,
        loading: false
      });
    });
  }

  handleChange = e => {
    const filteredCharacterList = this.state.characterList.filter(val =>
      val.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filterValue: e.target.value,
      filteredCharacterList
    });
  };

  render() {
    const { filterValue, filteredCharacterList, loading } = this.state;
    const { favoriteCharts } = this.context;

    return (
      <Fragment>
        <Filter filterValue={filterValue} handleChange={this.handleChange} />
        <ul className="App_card-list" data-testid="card-list">
          {loading && <span data-testid="card-loading">Loading...</span>}
          {!loading &&
            filteredCharacterList.map(char => (
              <Link to={`details/${char.id}`} key={char.id}>
                <Card
                  favorite={favoriteCharts[char.id] || false}
                  name={char.name}
                  src={char.image}
                />
              </Link>
            ))}
        </ul>
      </Fragment>
    );
  }
}

export default CardList;
