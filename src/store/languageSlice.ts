import { createSlice } from '@reduxjs/toolkit';
import { languages } from '../constants';

export interface LanguageState {
	// TODO
	languageSelected: any;
}

const initialState: LanguageState = {
	languageSelected: languages[0],
};

const languageReducer = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setCurrentlanguage(state, action) {
			state.languageSelected = action.payload;
		},
	},
});

export const { setCurrentlanguage } = languageReducer.actions;

export default languageReducer.reducer;
