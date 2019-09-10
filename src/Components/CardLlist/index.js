import React, { Fragment, Component } from 'react';
import Card from '../Card';

const mockData = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    favorite: false
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    favorite: false
  },
  {
    id: 3,
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    favorite: true
  },
  {
    id: 4,
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    favorite: false
  }
];
class CardList extends Component {
  state = {
    filterValue: '',
    filteredCharacterList: mockData,
    characterList: mockData
  };

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
    const { filterValue, filteredCharacterList } = this.state;

    return (
      <Fragment>
        <div className="App_label-group App_filter">
          <label>Filter:</label>
          <input value={filterValue} onChange={this.handleChange} />
        </div>
        <ul className="App_card-list">
          {filteredCharacterList.map(char => (
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
