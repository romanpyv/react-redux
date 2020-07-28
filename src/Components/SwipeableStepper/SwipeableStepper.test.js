import React from 'react';
import { mount, shallow } from 'enzyme';
import SwipeableStepper from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Swipeable stepper', () => {
  let standardProps;
  beforeEach(() => {
    standardProps = {
      initialStep: 0,
      allowedSteps: 2,
      finishLink: '/results',
      onNext: () => null,
    };
  });

  const createComponent = (props) => (
    <SwipeableStepper { ...props }>
      <div className={ 'first-child' }>1</div>
      <div className={ 'second-child' }>2</div>
    </SwipeableStepper>
  );

  const createComponentWithRouter = (props) => (
    <MemoryRouter>
      <SwipeableStepper { ...props }>
        <div className={ 'first-child' }>1</div>
        <div className={ 'second-child' }>2</div>
      </SwipeableStepper>
    </MemoryRouter>
  );

  it('Should render without errors', () => {
    standardProps.initialStep = 2;
    let component = mount(createComponentWithRouter(standardProps));
    expect(component.find('SwipeableStepper')).toHaveLength(1);
  });

  it('Should have correct number of steps', () => {
    let component = shallow(createComponent(standardProps));
    expect(component.state().steps).toBe(2);
  });

  it('Should start with first step', () => {
    let component = shallow(createComponent(standardProps));

    expect(component.state().currentStep).toBe(0);
  });

  it('Should start with last step if initial step is bigger than number of steps', () => {
    standardProps.initialStep = 2;
    let component = shallow(createComponent(standardProps));

    expect(component.state().currentStep).toBe(1);
  });

  it('Should display correct child for current step', () => {
    let component = mount(createComponentWithRouter(standardProps));

    expect(component.find('.first-child').length).toBe(1);
    expect(component.find('.second-child').length).toBe(0);

    let nextBtn = component.find('.MuiButtonBase-root').at(1);
    nextBtn.simulate('click');

    expect(component.find('.first-child').length).toBe(0);
    expect(component.find('.second-child').length).toBe(1);

    component.unmount();
  });

});