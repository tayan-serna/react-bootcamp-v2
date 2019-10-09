import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import Card from './';

it('renders without crashing', async () => {
  const defaultProps = {
    src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    favorite: false
  };
  const { rerender, findByTestId, queryByTestId } = render(<Card />);
  let imgNode = await waitForElement(() => findByTestId('card-image'));
  let nameNode = await waitForElement(() => findByTestId('card-name'));
  let favoriteNode = queryByTestId('card-favorite');

  expect(imgNode).toBeTruthy();
  expect(imgNode.src).toEqual(defaultProps.src);
  expect(nameNode).toBeTruthy();
  expect(nameNode.textContent).toEqual(defaultProps.name);
  expect(favoriteNode).toBeNull();

  const newProps = {
    src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    favorite: true
  };

  rerender(<Card {...newProps} />);
  imgNode = await waitForElement(() => findByTestId('card-image'));
  nameNode = await waitForElement(() => findByTestId('card-name'));
  favoriteNode = queryByTestId('card-favorite');

  expect(imgNode).toBeTruthy();
  expect(imgNode.src).toEqual(newProps.src);
  expect(nameNode).toBeTruthy();
  expect(nameNode.textContent).toEqual(newProps.name);
  expect(favoriteNode).toBeTruthy();
});
