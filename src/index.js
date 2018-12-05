import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import Favorites from './components/Favorites';
import rootReducer from './reducers/rootReducer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/style.scss';
import { loadFavoritesFromLocalStorage, saveFavoritesFromLocalStorage } from './func/localStorage';

const allFavorites = loadFavoritesFromLocalStorage();
const store = createStore(rootReducer, allFavorites, applyMiddleware(thunk));

store.subscribe(() => {
  saveFavoritesFromLocalStorage({
    dogData: store.getState().dogData.filter(dog => dog.favorites),
  });
});

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path="/" component={Main} exact />
        <Route path="/favorites" component={Favorites} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
