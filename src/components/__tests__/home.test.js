import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../home';

it('home page renders well', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
