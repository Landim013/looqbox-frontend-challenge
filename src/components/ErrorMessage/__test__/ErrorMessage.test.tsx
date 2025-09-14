import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '..';
describe('ErrorMessage', () => {
  it('renderiza a mensagem padrão', () => {
    render(<ErrorMessage />);
    expect(screen.getByText(/Ops, pokémon não encontrado!/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Icon pikachu/i)).toBeInTheDocument();
  });

  it('renderiza uma mensagem customizada quando passada via props', () => {
    render(<ErrorMessage message="Erro de conexão" />);
    expect(screen.getByText(/Erro de conexão/i)).toBeInTheDocument();
  });
});
