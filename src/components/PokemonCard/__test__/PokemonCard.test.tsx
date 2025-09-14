// src/components/PokemonCard/__test__/PokemonCard.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokemonCard from '..';
import type { Pokemon } from '../../../constants/Pokemon';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  MemoryRouter: ({ children }: any) => <div>{children}</div>,
  useNavigate: () => mockNavigate,
}));

jest.mock('../../../apis/getPokemonImage', () => ({
  getPokemonImage: (id: number) => `https://mock.img/${id}.png`,
}));

const POKEMON: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  types: [
    { slot: 1, type: { name: 'grass', url: '' } },
    { slot: 2, type: { name: 'poison', url: '' } },
  ],
  stats: [
    { base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } },
    { base_stat: 49, effort: 0, stat: { name: 'attack', url: '' } },
    { base_stat: 49, effort: 0, stat: { name: 'defense', url: '' } },
    { base_stat: 45, effort: 0, stat: { name: 'speed', url: '' } },
    { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: '' } },
    { base_stat: 65, effort: 0, stat: { name: 'special-attack', url: '' } },
  ],
} as unknown as Pokemon;

describe('PokemonCard', () => {
  afterEach(() => mockNavigate.mockClear());

  it('renderiza nome, id, imagem e tipos', () => {
    render(
      <div>
        <PokemonCard pokemon={POKEMON} />
      </div>,
    );

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText('#001')).toBeInTheDocument();

    const img = screen.getByRole('img', { name: /bulbasaur/i });
    expect(img).toHaveAttribute('src', 'https://mock.img/1.png');

    expect(screen.getByText(/grass/i)).toBeInTheDocument();
    expect(screen.getByText(/poison/i)).toBeInTheDocument();
  });

  it('mostra peso e altura com unidade correta', () => {
    render(<PokemonCard pokemon={POKEMON} />);
    expect(screen.getByText(/6\.9 kg/i)).toBeInTheDocument();
    expect(screen.getByText(/0\.7 m/i)).toBeInTheDocument();
  });

  it('navega ao clicar no botão "Mais detalhes"', async () => {
    render(<PokemonCard pokemon={POKEMON} />);
    await userEvent.click(screen.getByRole('button', { name: /mais detalhes/i }));
    expect(mockNavigate).toHaveBeenCalledWith(`/pokemon/${POKEMON.id}`, {
      state: { pokemon: POKEMON },
    });
  });
});
