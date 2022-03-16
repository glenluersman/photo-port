import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

const mockSetContactSelected = jest.fn();
const mockContactSelected = jest.fn();

afterEach(cleanup)

describe('Contact component renders', () => {
  it('renders', () => {
  render(<Contact
    setContactSelected={mockSetContactSelected}
    contactSelected={mockContactSelected}
  />);
});

  it('renders', () => {
    const { asFragment } = 
    render(<Contact
      setContactSelected={mockSetContactSelected}
      contactSelected={mockContactSelected}
    />)
    expect(asFragment()).toMatchSnapshot()
  })
})


it('renders', () => {
  const { getByTestId } = 
  render(<Contact
    setContactSelected={mockSetContactSelected}
    contactSelected={mockContactSelected}
  />)
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
})
 
it('renders', () => {
  const { getByTestId } = 
  render(<Contact
    setContactSelected={mockSetContactSelected}
    contactSelected={mockContactSelected}   
  />)
  expect(getByTestId('button')).toHaveTextContent('Submit');
})