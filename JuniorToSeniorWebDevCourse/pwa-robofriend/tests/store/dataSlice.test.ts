import reducer, {dataSlice, fetchData} from '../../src/store/dataSlice';
import {describe, expect, test, vi} from 'vitest';
import {setupStore} from "../../src/store/store";

describe('testing data silce', () => {
  test('initial state', () => {
    const initialState = {
      data: [],
      status: 'loading',
    };
    expect(reducer(undefined, {type: undefined})).toEqual(initialState);
  });

  test('test fetch data', async () => {
    console.log(reducer.prototype)
    // vi.spyOn(reducer.prototype, 'fetchData').mockResolvedValue(['tst']);
    const store = setupStore();
    await store.dispatch(fetchData());
    console.log(store.getState());
    expect(store.getState().data.data.length).toEqual(2);
  });

});
