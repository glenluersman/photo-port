import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup)

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal
      mockToggleModal={mockToggleModal}
      currentPhoto={currentPhoto}  
    />)
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } =
    render(<Modal
      mockToggleModal={mockToggleModal}
      currentPhoto={currentPhoto}  
    />)
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } =
    render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    fireEvent.click(getByText('Close this modal'));
    
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  })
})