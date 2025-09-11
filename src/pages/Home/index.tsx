import { Pagination } from 'antd';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { loadPokemons, setPage } from '../../core/slices/pokedexSlice';
import * as S from './styles';

function Home() {
  const { list, total, page, pageSize, status } = useAppSelector((s) => s.pokedex);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPokemons(page));
  }, [page, dispatch]);

  function handleChange(nextPage: number) {
    dispatch(setPage(nextPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <S.Container>
      <Header />

      <S.Inner>
        {status === 'loading' ? (
          <p>Carregando…</p>
        ) : (
          <>
            <S.Grid>
              {list.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  setModal={() => {}}
                  setPokemonData={() => {}}
                />
              ))}
            </S.Grid>

            <Pagination
              current={page}
              total={total}
              pageSize={pageSize}
              showSizeChanger={false}
              onChange={handleChange}
              style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}
            />
          </>
        )}
      </S.Inner>
    </S.Container>
  );
}

export default Home;
