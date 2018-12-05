import reducer from '../../reducers/rootReducer';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ dogData: [] });
  });
  it('Should handle RENDERED_ONCE', () => {
    const renderedOnceState = {
      renderedOnce: false,
    };
    const renderedOnceAction = {
      type: 'RENDERED_ONCE',
    };
    expect(reducer(renderedOnceState, renderedOnceAction)).toEqual({
      renderedOnce: true,
    });
  });
  it('Should handle TOOGLE_LOADING', () => {
    const toogleLoadingState = {
      loadingDog: true,
    };
    const toogleLoadingAction = {
      type: 'TOOGLE_LOADING',
    };
    expect(reducer(toogleLoadingState, toogleLoadingAction)).toEqual({
      loadingDog: false,
    });
  });
});
