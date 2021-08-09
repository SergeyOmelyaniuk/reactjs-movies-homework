import { createSlice } from '@reduxjs/toolkit';
import { translate } from '../constants';

export interface FilmsState {
	categoryValue: string;
	pages: number;
	currentPage: number;
}

const initialState: FilmsState = {
	categoryValue: translate.en.categories[0].value,
	pages: 6,
	currentPage: 1,
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
});

export const { changeCategory, setCurrentPage } = filmsReducer.actions;

export default filmsReducer.reducer;
