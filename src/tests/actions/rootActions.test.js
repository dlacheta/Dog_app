import * as actions from '../../actions/rootActions';

describe('Actions', () => {
  it('Should toogle rendered once', () => {
    const expectedAction = {
      type: 'RENDERED_ONCE',
    };
    expect(actions.toogleRender()).toEqual(expectedAction);
  });
  it('Should toogle favorites', () => {
    const expectedAction = {
      type: 'TOOGLE_FAVORITES',
      id: 12,
    };
    expect(actions.toogleFavorites(12)).toEqual(expectedAction);
  });
  it('Should toogle loading', () => {
    const expectedAction = {
      type: 'TOOGLE_LOADING',
    };
    expect(actions.toogleLoading()).toEqual(expectedAction);
  });
});
