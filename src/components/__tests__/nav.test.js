import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../nav';

describe('Testing the navlinks', () => {
  it('Navbar is rendering well', () => {
    const tree = renderer
      .create(
        <Router>
          <NavBar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test Home Page link', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Home'));

    expect(screen.getByText('Home')).toMatchInlineSnapshot(`
    <a
      class="link"
      href="/"
    >
      Home
    </a>
  `);
  });

  it('Test Calculator link', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText('Calculator')).toMatchInlineSnapshot(`
    <a
      class="link"
      href="/calculator"
    >
      Calculator
    </a>
  `);
  });

  it('Test Quote page link', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Quote'));

    expect(screen.getByText('Quote')).toMatchInlineSnapshot(`
    <a
      class="link"
      href="/quote"
    >
      Quote
    </a>
  `);
  });
});
