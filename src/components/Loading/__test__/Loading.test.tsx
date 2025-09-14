import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Loading } from '..';

describe('Loading', () => {
  it('renderiza o spinner corretamente', () => {
    const { container } = render(<Loading />);
    const spinner = container.querySelector('.lds-roller');
    expect(spinner).toBeInTheDocument();
  });
});
