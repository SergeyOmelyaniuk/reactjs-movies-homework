import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { translate } from '../constants';
import getGenresFilms from '../helpers/getGenresFilms';

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

			const dataWithGenres = getGenresFilms(listGenres, data.results);

			return dataWithGenres;
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

//TODO
export interface FilmsState {
	categoryValue: string;
	pages: number;
	currentPage: number;
	listfilms: any;
	status: any;
	error: any;
	listGenres: any;
}

const initialState: FilmsState = {
	categoryValue: translate.en.categories[0].value,
	pages: 6,
	currentPage: 1,
	listfilms: [],
	status: null,
	error: null,
	listGenres: [],
};

const filmsReducer = createSlice({
	name: 'films',
	initialState,
	reducers: {
		changeCategory(state, action) {
			state.categoryValue = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilms.pending, (state, { payload }) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(fetchFilms.fulfilled, (state, { payload }) => {
			state.listfilms = payload;
		});
		builder.addCase(fetchFilms.rejected, (state, { payload }) => {
			state.status = 'failed';
			state.error = payload;
		});

		builder.addCase(fetchGenres.fulfilled, (state, { payload }) => {
			state.listGenres = payload.genres;
		});
	},
});

export const { changeCategory, setCurrentPage } = filmsReducer.actions;

export default filmsReducer.reducer;
