import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './Item';

export const Favorites = (props) => {
  const { dogData } = props;
  return (
    <React.Fragment>
      <div className="alert alert-info">
        Click on the picture to remove dog from Your favorites!
      </div>
      <div className="container-fluid">
        {dogData.length > 0 ? <Item dogData={dogData} /> : "You don't like any dog :("}
      </div>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  dogData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      favorites: PropTypes.bool,
    }),
  ),
};

Favorites.defaultProps = {
  dogData: [],
};

const mapStateToProps = state => ({ dogData: state.dogData.filter(dog => dog.favorites) });
export default connect(mapStateToProps)(Favorites);
