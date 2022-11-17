import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../calculator';

test('Test Calculator Page is rendered', () => {
  render(<Calculator />);

  expect(screen.findByTitle('Lets do some math!')).toMatchSnapshot();
});