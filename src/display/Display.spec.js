import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('displays open by default', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/Open/i)).toBeTruthy();
  })

  it('displays unlocked by default', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/Unlocked/i)).toBeTruthy();
  })
});
