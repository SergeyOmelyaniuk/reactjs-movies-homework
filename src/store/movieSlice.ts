import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MovieAPI, MovieDetails, MovieImages, Actor } from '../types';

export const fetchMovieDetails = createAsyncThunk(
	'movie/fetchMovieDetails',
	async function (id: string, { rejectWithValue, getState }) {
		const state = getState() as any;
		const { languageSelected } = state.language;

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

interface FetchMovieDetailsPayload {
	movie: MovieDetails;
	images: { backdrops: MovieImages[] };
	recommendations: { results: MovieAPI[] };
	actors: { cast: Actor[] };
}

export interface MovieState {
	movieDetails: MovieDetails | null;
	movieImages: MovieImages[] | null;
	moviesRecommendations: MovieAPI[] | null;
	topCast: Actor[] | null;
	status: string | null;
}

const initialState: MovieState = {
	movieDetails: null,
	movieImages: null,
	moviesRecommendations: null,
	topCast: null,
	status: null,
};

const movieReducer = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovieDetails.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchMovieDetails.fulfilled,
			(state, { payload }: PayloadAction<FetchMovieDetailsPayload>) => {
				state.status = 'fulfilled';
				state.movieDetails = payload.movie;
				state.movieImages = payload.images.backdrops;
				state.moviesRecommendations = payload.recommendations.results;
				state.topCast = payload.actors.cast;
			}
		);
		builder.addCase(fetchMovieDetails.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default movieReducer.reducer;
