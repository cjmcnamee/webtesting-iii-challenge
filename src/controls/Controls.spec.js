import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {

  it('close and lock buttons exist', () => {
    const { getByTestId } = render(<Controls />);
    expect(getByTestId('lockButton'));
    expect(getByTestId('closeButton'));
  })

  it('"buttons" text changes', () => {
    const { queryByText, getByTestId } = render(<Controls />);
    expect(queryByText('Close Gate'));
    expect(queryByText('Lock Gate'));
    fireEvent.click(getByTestId('closeButton'));
    fireEvent.click(getByTestId('lockButton'))
    expect(queryByText('Open Gate'));
    expect(queryByText('Unlock Gate'));
  })

  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('gate cannot be closed if locked', () => {
    const { container, getByTestId, queryByText } = render(<Controls locked={true} closed={true}/>);
    const lockButton = queryByText('Open Gate');
    expect(lockButton.disabled).toBe(true);
  })

  it('the locked button is disabled if gate it open', () => {
    const { queryByText } = render(<Controls locked={false} closed={false}/>);
    const lockButton = queryByText('Lock Gate');
    expect(lockButton.disabled).toBe(true);
  })
});
