import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { translate } from '../constants';
import getGenresFilms from '../helpers/getGenresFilms';
import { Movie, Genre } from '../types';

export const fetchFilms = createAsyncThunk(
	'todos/fetchTodos',
	async function (_, { rejectWithValue, getState, dispatch }) {
		const { films } = getState() as any;

		if (films.listGenres.length === 0) {
			await dispatch(fetchGenres());
		}

		const state = getState() as any;
		const { currentPage, categoryValue, listGenres } = state.films;

		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${categoryValue}?api_key=75375a34318f83bb07dacbf870f89dd3&language=en-US&page=${currentPage}`
			);

			if (!response.ok) {
				throw new Error('Server Error!');
			}

			const data = await response.json();
			console.log(data);

			return {
				totalPages: data.total_pages,
				results: getGenresFilms(listGenres, data.results),
			};
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchGenres = createAsyncThunk(
	'todos/fetchGenres',
	async function (_, { rejectWithValue }) {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=75375a34318f83bb07dacbf870f89dd3&language=en-US`
			);

			if (!response.ok) {
				throw new Error('Server Error!');
			}

			const data = await response.json();

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export interface FilmsState {
	categoryValue: string;
	currentPage: number;
	totalPages: number;
	listfilms: Movie[];
	status: null | string;
	listGenres: Genre[];
}

const initialState: FilmsState = {
	categoryValue: translate.en.categories[0].value,
	currentPage: 1,
	totalPages: 0,
	listfilms: [],
	status: null,
	listGenres: [],
};

const filmsReducer = createSlice({
	name: 'films',
	initialState,
	reducers: {
		changeCategory(state, action: PayloadAction<string>) {
			state.categoryValue = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilms.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchFilms.fulfilled,
			(
				state,
				{ payload }: PayloadAction<{ totalPages: number; results: Movie[] }>
			) => {
				state.listfilms = payload.results;
				state.totalPages = payload.totalPages;
			}
		);
		builder.addCase(fetchFilms.rejected, (state) => {
			state.status = 'failed';
		});

		builder.addCase(
			fetchGenres.fulfilled,
			(state, { payload }: PayloadAction<{ genres: Genre[] }>) => {
				state.listGenres = payload.genres;
			}
		);
	},
});

export const { changeCategory, setCurrentPage } = filmsReducer.actions;

export default filmsReducer.reducer;
