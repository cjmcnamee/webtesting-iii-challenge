import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Display, { closedClass } from './Display';

describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('displays "open" by default', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/Open/i)).toBeTruthy();
  })

  it('displays "unlocked" by default', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/Unlocked/i)).toBeTruthy();
  })
  // it('uses "red-led" class when locked or closed', () => {
  //   const { getByTestId, queryByText } = render(<Display />);
  //   const expected = 'led red-led';
  //   expect(queryByText(/Locked/i)).toBeTruthy();
  //   expect(closedClass).toBe('red-led');
  // })
});
