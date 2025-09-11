// src/core/slices/pokedexSlice.ts
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { listPokemons } from '../../apis/getList';
import type { Pokemon } from '../../constants/Pokemon';

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

export const loadPokemons = createAsyncThunk('pokedex/load', async (page: number, { getState }) => {
  const { pokedex } = getState() as { pokedex: PokedexState };
  const { pageSize } = pokedex;
  const { results, total } = await listPokemons(page, pageSize);
  return { results, total, page };
});

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
  extraReducers: (b) => {
    b.addCase(loadPokemons.pending, (s) => {
      s.status = 'loading';
    });
    b.addCase(loadPokemons.fulfilled, (s, a) => {
      s.status = 'succeeded';
      s.list = a.payload.results;
      s.total = a.payload.total;
      s.page = a.payload.page;
    });
    b.addCase(loadPokemons.rejected, (s, a) => {
      s.status = 'failed';
      s.error = a.error.message;
    });
  },
});

export const { setPage, setPageSize } = pokedexSlice.actions;
export default pokedexSlice.reducer;
