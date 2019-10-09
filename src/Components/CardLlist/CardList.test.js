import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitForElement, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as axiosMock from 'axios';

import CardList from './';
import FavoriteContext from '../Context/FavoriteContext';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

it('should render without crash', async () => {
  let fakeData = {
    results: [
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
      }
    ]
  };
  let fakeContext = {
    favoriteCharts: {},
    setFavoriteCharts: jest.fn()
  };
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });
  let content;
  act(() => {
    content = render(
      <MemoryRouter>
        <FavoriteContext.Provider value={fakeContext}>
          <CardList />
        </FavoriteContext.Provider>
      </MemoryRouter>
    );
    let loadingNode = content.getByTestId('card-loading');
    expect(loadingNode.textContent).toEqual('Loading...');
  });

  let cardListNode = await waitForElement(() =>
    content.getByTestId('card-list')
  );

  expect(cardListNode.children).toHaveLength(2);
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(RickAndMortyAPI);
});
