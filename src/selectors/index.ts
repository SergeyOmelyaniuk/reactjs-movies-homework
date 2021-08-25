import { RootState } from '../store/store';

export const getLanguageSelected = (state: RootState) =>
	state.language.languageSelected;

export const getListGenres = (state: RootState) => state.movies.listGenres;
export const getCategoryValue = (state: RootState) =>
	state.movies.categoryValue;
export const getTotalPages = (state: RootState) => state.movies.totalPages;
export const getCurrentPage = (state: RootState) => state.movies.currentPage;
export const getListMovies = (state: RootState) => state.movies.listMovies;
export const getSearchValue = (state: RootState) => state.movies.searchValue;

export const getMovieDetails = (state: RootState) => state.movie.movieDetails;
export const getMovieImages = (state: RootState) => state.movie.movieImages;
export const getMoviesRecommendations = (state: RootState) =>
	state.movie.moviesRecommendations;
export const getTopCast = (state: RootState) => state.movie.topCast;

export const getActorProfile = (state: RootState) => state.actor.actorProfile;
export const getActorImages = (state: RootState) => state.actor.actorImages;
export const getActorKnowBy = (state: RootState) => state.actor.actorKnowBy;
