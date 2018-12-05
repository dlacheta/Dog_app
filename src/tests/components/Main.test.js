import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '../../components/Main';

it('Main component renders correctly', () => {
  const getDogDispatch = jest.fn();
  const toogleLoadingDispatch = jest.fn();
  const toogleRenderDispatch = jest.fn();
  const wrapper = shallow(
    <Main
      getDogDispatch={getDogDispatch}
      toogleLoadingDispatch={toogleLoadingDispatch}
      toogleRenderDispatch={toogleRenderDispatch}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
