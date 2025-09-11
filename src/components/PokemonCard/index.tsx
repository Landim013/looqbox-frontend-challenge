// src/components/PokemonCard/index.tsx
import type { Pokemon } from '../../constants/Pokemon';
import { getTypeColor } from '../../utils/getTypeColors';
import * as S from './styles';

type PokemonCardProps = {
  pokemon: Pokemon;
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};

function PokemonCard({ pokemon, setModal, setPokemonData }: PokemonCardProps) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const formatPokemonId = (id: number) => (id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`);

  const mainType = pokemon.types[0]?.type.name ?? 'normal';
  const mainColor = getTypeColor(mainType);

  function handleClick() {
    setPokemonData(pokemon);
    setModal(true);
  }

  return (
    <S.Card>
      <S.CardOverlay $color={mainColor} />
      <S.ImageWrapper>
        <img src={imgUrl} alt={pokemon.name} loading="lazy" />
      </S.ImageWrapper>

      <S.Number>{formatPokemonId(pokemon.id)}</S.Number>
      <S.Name>{pokemon.name}</S.Name>

      <S.Types>
        {pokemon.types.map(({ type }) => {
          // const color = pokemonTypes.find((t) => t.name === type.name)?.color ?? '#777';

          return (
            <S.TypesButton key={type.name} $color={mainColor}>
              <S.TypeDescription>{type.name}</S.TypeDescription>
            </S.TypesButton>
          );
        })}
      </S.Types>

      <S.Features onClick={handleClick} role="button" tabIndex={0}>
        <S.Specification>
          <>
            {/* <WeightIcon /> */}
            <S.Metrics>{`${pokemon.weight / 10}`} kg</S.Metrics>
          </>
          <span>Peso</span>
        </S.Specification>

        <S.Specification>
          <>
            {/* <RulerIcon /> */}
            <S.Metrics>{`${pokemon.height / 10}`} m</S.Metrics>
          </>
          <span>Altura</span>
        </S.Specification>
      </S.Features>

      {/* <S.DetailsButton onClick={handleClick}>Mais Detalhes</S.DetailsButton> */}
    </S.Card>
  );
}

export default PokemonCard;
