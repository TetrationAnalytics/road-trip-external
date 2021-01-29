import React from 'react';
import { shallow } from 'enzyme';

import ContactInfo from '../index';

describe('ContactInfo', () => {
  test('should render', () => {
    const wrapper = shallow(<ContactInfo />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
