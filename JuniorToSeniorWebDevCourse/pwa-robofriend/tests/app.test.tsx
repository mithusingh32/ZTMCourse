import App from '../src/App';
import {describe, expect, test} from 'vitest';
import {renderWithProviders} from "./utils/test-utils";

describe('App Rendering', () => {
  test('App should render', async () => {
    const render = renderWithProviders(<App />);
    expect(render).toBeTruthy();
    expect(render.getByText("RoboFriends")).toBeInTheDocument();
  });
});
