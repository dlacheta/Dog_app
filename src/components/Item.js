import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toogleFavorites } from '../actions/rootActions';

export const Item = (props) => {
  const { dogData, toogleFavoritesDispatch } = props;
  const startToogleFavorites = (id) => {
    toogleFavoritesDispatch(id);
  };
  return (
    <div className="row">
      {dogData.map(dog => (
        <div key={dog.id} className="img-container d-flex">
          <img
            onClick={() => startToogleFavorites(dog.id)}
            src={dog.src}
            className={`img-responsive rounded ${dog.favorites ? 'favorite' : ''}`}
            alt="dog"
          />
          <i className="material-icons favorites-icon">favorite</i>
        </div>
      ))}
    </div>
  );
};

Item.propTypes = {
  toogleFavoritesDispatch: PropTypes.func.isRequired,
  dogData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      favorites: PropTypes.bool,
    }),
  ),
};

Item.defaultProps = {
  dogData: [],
};

const mapDispatchToProps = dispatch => ({
  toogleFavoritesDispatch: id => dispatch(toogleFavorites(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Item);
