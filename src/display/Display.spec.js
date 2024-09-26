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

  it('testing for red led when locked of closed', () => {
    const { container } = render(<Display locked={true} closed={true} />);
    expect(container.querySelector('.led red-led'));
  })

  it('testing for green led when unlocked or open', () => {
    const { container } = render(<Display locked={false} closed={false} />);
    expect(container.querySelector('.led green-led'));
  })

  it('should be "Closed" if closed prop is true', () => {
    const { queryByText } = render(<Display closed={true} />);
    expect(queryByText(/Closed/i));
  })

  it('"Open" if otherwise', () => {
    const { queryByText } = render(<Display closed={false} />);
    expect(queryByText(/Open/i));
  })
});
