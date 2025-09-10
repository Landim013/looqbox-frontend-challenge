// src/components/PokemonCard/index.tsx
import type { Pokemon } from '../../types/Pokemon';
import * as S from './styles';

type PokemonCardProps = {
  pokemon: Pokemon;
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};

function PokemonCard({ pokemon, setModal, setPokemonData }: PokemonCardProps) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const formatPokemonId = (id: number) => (id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`);

  function handleClick() {
    setPokemonData(pokemon); // mock por enquanto
    setModal(true);
  }

  return (
    <S.Card>
      <S.ImageWrapper>
        <img src={imgUrl} alt={pokemon.name} loading="lazy" />
      </S.ImageWrapper>

      <S.Number>{formatPokemonId(pokemon.id)}</S.Number>
      <S.Name>{pokemon.name}</S.Name>

      <S.Types>
        {pokemon.types.map(({ type }) => (
          <span key={type.name}>{type.name}</span>
        ))}
      </S.Types>

      <S.Features onClick={handleClick} role="button" tabIndex={0}>
        <div>Peso: {(pokemon.weight / 10).toFixed(1)} kg</div>
        <div>Altura: {(pokemon.height / 10).toFixed(1)} m</div>
      </S.Features>

      {/* <S.DetailsButton onClick={handleClick}>Mais Detalhes</S.DetailsButton> */}
    </S.Card>
  );
}

export default PokemonCard;
