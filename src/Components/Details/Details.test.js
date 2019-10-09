import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import * as axiosMock from 'axios';

import Details from './';
import FavoriteContext from '../Context/FavoriteContext';

it('should render without crash', async () => {
  const fakeHistory = {
    goBack: jest.fn()
  };
  const fakeMatch = {
    params: {
      id: '1'
    }
  };
  let fakeContext = {
    favoriteCharts: {},
    setFavoriteCharts: jest.fn(charList => {
      fakeContext.favoriteCharts = {
        ...fakeContext.favoriteCharts,
        ...charList
      };
    })
  };
  let fakeData = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };
  let containerUtils;
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });

  await act(async () => {
    containerUtils = render(
      <FavoriteContext.Provider value={fakeContext}>
        <Details history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  const imageNode = containerUtils.getByAltText(fakeData.name);
  fireEvent.dblClick(imageNode);

  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledTimes(1);
  expect(fakeContext.favoriteCharts).toEqual({
    1: true
  });
  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledWith(
    fakeContext.favoriteCharts
  );

  await act(async () => {
    containerUtils.rerender(
      <FavoriteContext.Provider value={fakeContext}>
        <Details history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  fireEvent.dblClick(imageNode);

  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledTimes(2);
  expect(fakeContext.favoriteCharts).toEqual({
    1: false
  });
  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledWith(
    fakeContext.favoriteCharts
  );

  expect(imageNode.src).toEqual(fakeData.image);
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(
    'https://rickandmortyapi.com/api/character/1'
  );

  fakeMatch.params.id = '2';
  fakeData = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  };
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });

  await act(async () => {
    containerUtils.rerender(
      <FavoriteContext.Provider value={fakeContext}>
        <Details history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  fireEvent.dblClick(imageNode);
  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledTimes(3);
  expect(fakeContext.favoriteCharts).toEqual({
    1: false,
    2: true
  });
  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledWith(
    fakeContext.favoriteCharts
  );

  await act(async () => {
    containerUtils.rerender(
      <FavoriteContext.Provider value={fakeContext}>
        <Details history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  fireEvent.dblClick(imageNode);

  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledTimes(4);
  expect(fakeContext.favoriteCharts).toEqual({
    1: false,
    2: false
  });
  expect(fakeContext.setFavoriteCharts).toHaveBeenCalledWith(
    fakeContext.favoriteCharts
  );
  expect(imageNode.src).toEqual(fakeData.image);
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
  expect(axiosMock.get).toHaveBeenCalledWith(
    'https://rickandmortyapi.com/api/character/2'
  );

  const backButtonNode = containerUtils.getByLabelText('back');
  fireEvent.click(backButtonNode);

  expect(fakeHistory.goBack).toHaveBeenCalledTimes(1);
});
