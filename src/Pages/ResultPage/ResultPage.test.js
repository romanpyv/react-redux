import configureStore from 'redux-mock-store';
import React from 'react';
import ResultPage from '.';
import { mount } from 'enzyme';

const mockStore = configureStore([]);

describe('Result page', () => {
  let state;

  beforeEach(() => {
    state = {
      generalScore: 10,
      questions: [],
      answers: [],
      resultImage: '',
    };
  });

  it('Should render without errors', () => {
    const store = mockStore(state);
    const component = mount(<ResultPage store={ store }/>);
    expect(component.find(ResultPage).length).toBe(1);
  });

  it('Should render message about unfinished test if not all questions were answered', () => {
    state.questions = [null, null];
    const expectedMessage = 'Finish test first!';
    const store = mockStore(state);
    const component = mount(<ResultPage store={ store }/>);
    expect(component.text()).toContain(expectedMessage);
  });

  it('Should render correct result for bad result', () => {
    const expectedMessage = 'Новачок';
    const store = mockStore(state);
    const component = mount(<ResultPage store={ store }/>);
    expect(component.text()).toContain(expectedMessage);
  });

  it('Should render correct result for good result', () => {
    state.generalScore = 51;
    const expectedMessage = 'Компетентний';
    const store = mockStore(state);
    const component = mount(<ResultPage store={ store }/>);
    expect(component.text()).toContain(expectedMessage);
  });

  it('Should render correct result for perfect result', () => {
    state.generalScore = 76;
    const expectedMessage = 'Експерт';
    const store = mockStore(state);
    const component = mount(<ResultPage store={ store }/>);
    expect(component.text()).toContain(expectedMessage);
  });
});