import React from 'react';
import { shallow } from 'enzyme';
import { Item } from '../../components/Item';

it('Item component renders correctly', () => {
  const toogleFavoritesDispatch = jest.fn();
  const wrapper = shallow(<Item toogleFavoritesDispatch={toogleFavoritesDispatch} />);
  expect(wrapper).toMatchSnapshot();
});
