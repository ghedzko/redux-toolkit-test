import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {  getMovies } from '../../services/movies';

export interface MoviesState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: any = {
  movies:null,
  value: 0,
  status: 'idle',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetch',
  async () => {
    const response = await getMovies();
    console.log({response});
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchMovies.pending, (state:any) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state:any, action:any) => {
        state.status = 'idle';
        state.movies = action.payload;
      });
  },
});

export default moviesSlice.reducer;