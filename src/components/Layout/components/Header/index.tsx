// src/components/Header/index.tsx
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/icons/logo.svg';
import { useAppDispatch } from '../../../../core/hooks';
import { searchByName, setPage } from '../../../../core/slices/pokedexSlice';
import HeaderCarousel from '../../../Carousel';
import SearchBar from '../../../SearchBar';
import * as S from './styles';
type Props = {
  showCarousel?: boolean;
};

function Header({ showCarousel = false }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // [NOVO]

  async function handleSearchResult(name: string) {
    if (name) {
      try {
        // [MUDANÇA] usamos unwrap para pegar o payload (Pokemon)
        const pokemon = await dispatch(searchByName(name)).unwrap();
        // [NOVO] navega para /pokemon/:id e passa o objeto para render imediato
        navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
      } catch {
        // opcional: exibir um toast/alert
        // message.error('Pokémon não encontrado');
      }
    } else {
      // limpar busca → volta para página 1 na Home
      dispatch(setPage(1));
      navigate('/'); // [NOVO] volta para Home ao limpar
    }
  }

  return (
    <S.Container>
      {showCarousel && <HeaderCarousel />}

      <S.Header>
        <S.Logo src={logo} alt="Logo" />
        <S.ContentSearchBar>
          <SearchBar onResult={handleSearchResult} />
        </S.ContentSearchBar>
      </S.Header>
    </S.Container>
  );
}

export default Header;
