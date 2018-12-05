import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from '../../components/Favorites';

it('Favorites component renders correctly', () => {
  const wrapper = shallow(<Favorites />);
  expect(wrapper).toMatchSnapshot();
});
