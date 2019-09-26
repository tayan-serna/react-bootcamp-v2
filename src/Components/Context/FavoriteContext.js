import { createContext } from 'react';

const FavoriteContext = createContext({
  favoriteCharts: {},
  setFavoriteCharts: () => {}
});

export default FavoriteContext;
