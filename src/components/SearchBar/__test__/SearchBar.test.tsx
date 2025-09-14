// src/components/SearchBar/__test__/SearchBar.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '..';

describe('SearchBar', () => {
  it('renderiza o input com placeholder', () => {
    const mockFn = jest.fn();
    render(<SearchBar onResult={mockFn} />);

    expect(screen.getByPlaceholderText(/pesquisar pokémon/i)).toBeInTheDocument();
  });

  it('atualiza valor quando usuário digita', async () => {
    const mockFn = jest.fn();
    render(<SearchBar onResult={mockFn} />);
    const input = screen.getByPlaceholderText(/pesquisar pokémon/i);

    await userEvent.type(input, 'Pikachu');
    expect(input).toHaveValue('Pikachu');
  });

  it('chama onResult ao pesquisar', async () => {
    const mockFn = jest.fn();
    render(<SearchBar onResult={mockFn} />);
    const input = screen.getByPlaceholderText(/pesquisar pokémon/i);

    await userEvent.type(input, 'Charmander');
    await userEvent.keyboard('{Enter}');

    expect(mockFn).toHaveBeenCalledWith('charmander');
  });
});
