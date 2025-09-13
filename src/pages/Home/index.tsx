import { Pagination } from 'antd';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { loadPokemons, searchByName, setPage } from '../../core/slices/pokedexSlice';
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

  function handleSearchResult(name: string) {
    if (name) {
      // busca por nome → 1 resultado
      dispatch(searchByName(name));
    } else {
      // limpar → volta para página 1 e recarrega a lista padrão
      dispatch(setPage(1));
      dispatch(loadPokemons(1));
    }
  }

  return (
    <S.Container>
      <Header />
      <S.ContentSearchBar>
        <SearchBar onResult={handleSearchResult} />
      </S.ContentSearchBar>

      <S.Inner>
        {status === 'loading' ? (
          <p>Carregando…</p>
        ) : (
          <>
            <S.Grid>
              {list.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
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
