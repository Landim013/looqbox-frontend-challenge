import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPokemonList } from '../../apis/fetchPokemonList';
import type { Pokemon } from '../../constants/Pokemon';

// estado do slice
type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

type PokedexState = {
  list: Pokemon[];
  total: number;
  page: number;
  pageSize: number;
  status: Status;
  error?: string;
};

const initialState: PokedexState = {
  list: [],
  total: 0,
  page: 1,
  pageSize: 12,
  status: 'idle',
};

// thunk para buscar a lista paginada (usa o mock por enquanto)
export const loadPokemons = createAsyncThunk(
  'pokedex/loadPokemons',
  async (page: number, { getState }) => {
    const state = getState() as { pokedex: PokedexState };
    const { pageSize } = state.pokedex;
    const { results, total } = await fetchPokemonList(page, pageSize);
    return { results, total, page };
  },
);

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadPokemons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.results;
        state.total = action.payload.total;
        state.page = action.payload.page;
      })
      .addCase(loadPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage, setPageSize } = pokedexSlice.actions;
export default pokedexSlice.reducer;
