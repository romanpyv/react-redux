import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setup = (props = {}) => {
  return shallow(<Header { ...props }/>);
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without  errors', () => {
    const wrapper = component.find('.App-header');
    expect(wrapper.length).toBe(1);
  });
});