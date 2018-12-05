export const loadFavoritesFromLocalStorage = () => {
  const serializedState = localStorage.getItem('favorites');
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const saveFavoritesFromLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('favorites', serializedState);
};
