// src/pages/Statistics/index.tsx
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getPokemonImage } from '../../apis/getPokemonImage';
import StatsBarChart from '../../components/StatusBarChart';
import TypePill from '../../components/TypePill';
import { pokemonTypes } from '../../constants/pokemonTypes';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { loadDetails } from '../../core/slices/pokedexSlice';
import * as S from './styles';

function Statistics() {
  const { id } = useParams();
  const { state } = useLocation() as { state?: { pokemon?: any } };
  const dispatch = useAppDispatch();

  const details = useAppSelector((s) => s.pokedex.detailsById[Number(id)]);
  const status = useAppSelector((s) => s.pokedex.status);

  useEffect(() => {
    if (!id) return;
    if (!details) dispatch(loadDetails(Number(id)));
  }, [id, details, dispatch]);

  const pokemon = details?.pokemon ?? state?.pokemon ?? null;
  const description = details?.description ?? '';

  if (!id) return <p>ID inválido.</p>;
  if (!pokemon) {
    return <p>{status === 'loading' ? 'Carregando…' : 'Pokémon não encontrado.'}</p>;
  }

  const mainType = pokemon.types[0]?.type.name ?? 'normal';
  const typeData = pokemonTypes.find((t) => t.name === mainType);
  const mainColor = typeData?.color ?? '#adcab8';

  const stats = pokemon.stats.map((s: any) => ({
    name: s.stat.name.toUpperCase(),
    value: s.base_stat,
    color: mainColor,
  }));

  const pokemonImage = getPokemonImage(pokemon.id);

  return (
    <S.Container>
      <S.ContantLeft>
        <S.Statistic>
          <S.Name>{pokemon.name.toUpperCase()}</S.Name>
          <S.Information>Peso: {pokemon.weight / 10} kg</S.Information>
          <S.Information>Altura: {pokemon.height / 10} m</S.Information>
          <S.Types>
            {pokemon.types.map(({ type }) => {
              const typeData = pokemonTypes.find((t) => t.name === type.name);
              const color = typeData?.color ?? '#777';
              const icon = typeData?.icon ?? '';

              return <TypePill key={type.name} color={color} icon={icon} label={type.name} />;
            })}
          </S.Types>
        </S.Statistic>
        <StatsBarChart stats={stats} />
      </S.ContantLeft>

      <S.ContantRight>
        <S.Image src={pokemonImage} alt={pokemon.name} loading="lazy" />

        <S.ResumePokemon>{description}</S.ResumePokemon>
      </S.ContantRight>
    </S.Container>
  );
}

export default Statistics;
