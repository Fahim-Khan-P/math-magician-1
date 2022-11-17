import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';

test('Test App rendering', () => {
  const tree = renderer
  .create(
      <App />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});