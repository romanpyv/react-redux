import {showResults} from './sagas';
import { call, put, take } from '@redux-saga/core/effects';
import { resultImageLoaded, actions } from './actions';

describe('Sagas', () => {
  it('Show result image loading', () => {
    const saga = showResults();
    const apiURL = 'https://api.thecatapi.com/v1/images/search';
    const imgUrl = 'imgUrl';
    const fetchJson = [{url: imgUrl}];
    const fetchResult = {json: () => fetchJson};

    let value = saga.next().value;
    value = saga.next().value;
    value = saga.next(fetchResult).value;
    value = saga.next(fetchJson).value;

    expect(value).toEqual(put(resultImageLoaded(imgUrl)));
    expect(saga.next().done).toBe(true);
  });
});