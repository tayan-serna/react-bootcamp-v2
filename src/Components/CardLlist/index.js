import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Card from '../Card';
import Filter from '../Filter';


const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';
class CardList extends Component {
  state = {
    filterValue: '',
    filteredCharacterList: [],
    characterList: [],
    loading: true
  };

  componentDidMount() {
    axios.get(RickAndMortyAPI).then(({ data: { results } }) => {
      this.setState({
        characterList: results,
        filteredCharacterList: results,
        loading: false
      })
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

    return (
      <Fragment>
        <Filter filterValue={filterValue} handleChange={this.handleChange} />
        <ul className="App_card-list">
          { loading && <span>Loading...</span>}
          {!loading && filteredCharacterList.map(char => (
            <Card
              key={char.id}
              favorite={char.favorite}
              name={char.name}
              src={char.image}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default CardList;
