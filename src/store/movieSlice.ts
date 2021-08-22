import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MovieAPI, Genre, MovieDetails, MovieImages, Actor } from '../types';

export const fetchMovieDetails = createAsyncThunk(
	'movie/fetchMovieDetails',
	async function (id: string, { rejectWithValue, getState }) {
		const state = getState() as any;
		const { languageSelected } = state.language;
		// const { currentIdFilm } = state.film;
		//TODO

		try {
			const [movie, images, recommendations, actors] = await Promise.all([
				fetch(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${languageSelected.value}`
				),
				fetch(
					`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`
				),
				fetch(
					`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${languageSelected.value}&page=1`
				),
				fetch(
					`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=${languageSelected.value}`
				),
			]).then((data) => Promise.all(data.map((res) => res.json())));

			return { movie, images, recommendations, actors };
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export interface MovieState {
	movieDetails: MovieDetails | null;
	movieImages: MovieImages[] | null;
	moviesRecommendations: MovieAPI[] | null;
	topCast: Actor[] | null;
	status: string | null;
	listGenres: Genre[];
	//TODO
	// currentIdFilm: number;
}

const initialState: MovieState = {
	movieDetails: null,
	movieImages: null,
	moviesRecommendations: null,
	topCast: null,
	status: null,
	listGenres: [],
	//TODO
	// currentIdFilm: 460465,
};

const movieReducer = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovieDetails.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchMovieDetails.fulfilled,
			//TODO
			(state, { payload }: PayloadAction<any>) => {
				state.movieDetails = payload.movie;
				state.movieImages = payload.images.backdrops;
				state.moviesRecommendations = payload.recommendations.results;
				state.topCast = payload.actors.cast;
				state.status = 'fulfilled';
			}
		);
		builder.addCase(fetchMovieDetails.rejected, (state) => {
			state.status = 'failed';
		});
	},
});
//TODO
// export const { } = movieReducer.actions;

export default movieReducer.reducer;
