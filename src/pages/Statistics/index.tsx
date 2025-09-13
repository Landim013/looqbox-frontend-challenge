// src/pages/Statistics/index.tsx
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPokemonImage } from '../../apis/getPokemonImage';
import IconHeight from '../../assets/icons/height.svg';
import iconHome from '../../assets/icons/home.svg';
import logo from '../../assets/icons/logo.svg';
import pokeball from '../../assets/icons/pokeball.svg';
import IconWeight from '../../assets/icons/weight.svg';
import SearchBar from '../../components/SearchBar';
import SimpleButton from '../../components/SimpleButtom';
import StatsBarChart from '../../components/StatusBarChart';
import StatsRadarChart from '../../components/StatusRadarChart';
import TypePill from '../../components/TypePill';
import { pokemonTypes } from '../../constants/pokemonTypes';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { loadDetails, loadPokemons, searchByName, setPage } from '../../core/slices/pokedexSlice';
import * as S from './styles';
function Statistics() {
  const { id } = useParams();
  const { state } = useLocation() as { state?: { pokemon?: any } };
  const dispatch = useAppDispatch();

  const details = useAppSelector((s) => s.pokedex.detailsById[Number(id)]);
  const status = useAppSelector((s) => s.pokedex.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    if (!details) dispatch(loadDetails(Number(id)));
  }, [id, details, dispatch]);

  const pokemon = details?.pokemon ?? state?.pokemon ?? null;
  const description = details?.description ?? '';
  const [chartType, setChartType] = useState('bar');
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
  console.log(stats[0].color);

  const pokemonImage = getPokemonImage(pokemon.id);
  function handleSearchResult(name: string) {
    if (name) {
      dispatch(searchByName(name));
    } else {
      dispatch(setPage(1));
      dispatch(loadPokemons(1));
    }
  }

  return (
    <>
      <S.Header>
        <S.Logo src={logo} alt="Logo" />
        <S.ContentSearchBar>
          <SearchBar onResult={handleSearchResult} />
        </S.ContentSearchBar>
      </S.Header>
      <SimpleButton text="Inicio" icon={iconHome} width="140px" onClick={() => navigate('/')} />

      <S.Container>
        <S.ContantLeft>
          <S.Statistic>
            <S.Name $color={stats[0].color}>{pokemon.name.toUpperCase()}</S.Name>
            <S.Information>
              {' '}
              <S.Icon src={IconWeight} />
              Peso: {pokemon.weight / 10} kg
            </S.Information>
            <S.Information>
              {' '}
              <S.Icon src={IconHeight} />
              Altura: {pokemon.height / 10} m
            </S.Information>
            <S.Types>
              {pokemon.types.map(({ type }) => {
                const typeData = pokemonTypes.find((t) => t.name === type.name);
                const color = typeData?.color ?? '#777';
                const icon = typeData?.icon ?? '';

                return <TypePill key={type.name} color={color} icon={icon} label={type.name} />;
              })}
            </S.Types>
          </S.Statistic>
          {chartType === 'bar' ? (
            <StatsBarChart stats={stats} />
          ) : (
            <S.Graphic>
              <StatsRadarChart stats={stats} />
            </S.Graphic>
          )}
          <S.ButtonGraphic>
            <SimpleButton
              text="Barras"
              width="140px"
              color={chartType === 'bar' ? '#141414' : '#2b2a2a'}
              onClick={() => setChartType('bar')}
            />
            <SimpleButton
              text="Radar"
              width="140px"
              color={chartType === 'radar' ? '#141414' : '#2b2a2a'}
              onClick={() => setChartType('radar')}
            />
          </S.ButtonGraphic>
        </S.ContantLeft>

        <S.ContantRight>
          <S.Image src={pokemonImage} alt={pokemon.name} loading="lazy" />

          <S.ResumePokemon $color={stats[0].color}>{description}</S.ResumePokemon>
        </S.ContantRight>
        <S.ImagePokeball src={pokeball} alt="Pokeball" />
      </S.Container>
    </>
  );
}

export default Statistics;
