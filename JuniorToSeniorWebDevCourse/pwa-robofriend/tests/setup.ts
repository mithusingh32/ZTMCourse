import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import {cleanup} from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import * as test_data from './utils/test_data.json';
import {rest} from "msw";
import {setupServer} from "msw/node";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const restHandlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    console.log('get')
    return res(ctx.status(200),ctx.json(test_data));
  }),
];

// Rest API Mocking
const server = setupServer(...restHandlers);
// Enable API mocking before tests.
beforeAll(() => {
  console.log("test")
  return server.listen();
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();

  // Reset any runtime request handlers we may add during the tests.
  return server.resetHandlers();
});

// Disable API mocking after the tests are done.
afterAll(() => server.close())
