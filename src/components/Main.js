import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDog, toogleLoading, toogleRender } from '../actions/rootActions';
import Item from './Item';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    const { renderedOnce, getDogDispatch, toogleRenderDispatch } = this.props;
    if (!renderedOnce) {
      getDogDispatch();
      toogleRenderDispatch();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const { loadingDog, toogleLoadingDispatch, getDogDispatch } = this.props;
    if (
      window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      && !loadingDog
    ) {
      toogleLoadingDispatch();
      getDogDispatch();
    }
  }

  render() {
    const { dogData, loadingDog, error } = this.props;
    return (
      <div>
        <div className="alert alert-info">Click on the picture to add dog to Your favorites!</div>
        <div className="container-fluid">
          {!error ? (
            <Item dogData={dogData} />
          ) : (
            `Unfortunatelly because of "${error}" We cannot provide You cute dogs, please try again later`
          )}
        </div>
        {loadingDog ? (
          <div className="loading-container">
            <div className="loading" />
          </div>
        ) : null}
      </div>
    );
  }
}

Main.propTypes = {
  getDogDispatch: PropTypes.func.isRequired,
  toogleLoadingDispatch: PropTypes.func.isRequired,
  toogleRenderDispatch: PropTypes.func.isRequired,
  loadingDog: PropTypes.bool,
  renderedOnce: PropTypes.bool,
  error: PropTypes.string,
  dogData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      favorites: PropTypes.bool,
    }),
  ),
};

Main.defaultProps = {
  dogData: [],
  loadingDog: true,
  renderedOnce: false,
  error: '',
};

const mapStateToProps = state => ({
  dogData: state.dogData.filter(dog => !dog.favorites),
  loadingDog: state.loadingDog,
  renderedOnce: state.renderedOnce,
  error: state.error,
});
const mapDispachToProps = dispatch => ({
  getDogDispatch: () => dispatch(getDog()),
  toogleLoadingDispatch: () => dispatch(toogleLoading()),
  toogleRenderDispatch: () => dispatch(toogleRender()),
});

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Main);
