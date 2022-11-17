import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../quote';

it('Quote page is rendering correctly', () => {
  const tree = renderer
    .create(<Quotes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
