import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { translate } from '../constants';
import getGenresFilms from '../helpers/getGenresFilms';
import { Movie, Genre } from '../types';

export const fetchFilms = createAsyncThunk(
	'todos/fetchFilms',
	async function (_, { rejectWithValue, getState, dispatch }) {
		const { films } = getState() as any;

		if (films.listGenres.length === 0) {
			await dispatch(fetchGenres());
		}

		const state = getState() as any;
		const { currentPage, categoryValue, listGenres, searchValue } = state.films;
		const url = searchValue
			? `${process.env.REACT_APP_API_URL}/search/movie?query=${searchValue}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
			: `${process.env.REACT_APP_API_URL}/movie/${categoryValue}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`;

		try {
			const response = await fetch(url);

			const data = await response.json();

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
				`${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
			);

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
	searchValue: string;
}

export const initialState: FilmsState = {
	categoryValue: translate.en.categories[0].value,
	currentPage: 1,
	totalPages: 0,
	listfilms: [],
	status: null,
	listGenres: [],
	searchValue: '',
};

const filmsReducer = createSlice({
	name: 'films',
	initialState,
	reducers: {
		changeCategory(state, action: PayloadAction<string>) {
			state.categoryValue = action.payload;
			state.currentPage = 1;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setSearcValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
			state.currentPage = 1;
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

		builder.addCase(fetchGenres.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchGenres.fulfilled,
			(state, { payload }: PayloadAction<{ genres: Genre[] }>) => {
				state.listGenres = payload.genres;
			}
		);
		builder.addCase(fetchGenres.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export const { changeCategory, setCurrentPage, setSearcValue } =
	filmsReducer.actions;

export default filmsReducer.reducer;
