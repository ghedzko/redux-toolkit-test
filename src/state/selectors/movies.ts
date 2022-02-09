import { RootStateOrAny } from "react-redux";

export const selectMovies = (state: RootStateOrAny) => state.movies.movies;