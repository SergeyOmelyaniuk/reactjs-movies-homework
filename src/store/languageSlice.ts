import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { languages } from '../constants';
import { Language } from '../types';

export interface LanguageState {
	languageSelected: Language;
}

const initialState: LanguageState = {
	languageSelected: languages[0],
};

const languageReducer = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setCurrentlanguage(state, action: PayloadAction<Language>) {
			state.languageSelected = action.payload;
		},
	},
});

export const { setCurrentlanguage } = languageReducer.actions;

export default languageReducer.reducer;
