import React from 'react';
import { mount, shallow } from 'enzyme'
import Question from './index';

describe('Single question component', () => {
  let component;
  let standardProps = {
    index: 0,
    answer: -1,
    text: 'test',
    disabled: false,
    variants: [
      {
        value: 1,
        text: 'test question',
      },
    ],
  };

  it('Should render without errors', () => {
    component = shallow(<Question { ...standardProps }/>);
    expect(component.find('.question-container').length).toBe(1);
  });

  it('Should have correct number of questions', () => {
    component = mount(<Question { ...standardProps }/>);
    expect(component.find('.MuiFormControlLabel-root').length).toBe(standardProps.variants.length);
    component.unmount();
  });
})