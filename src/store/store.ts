import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import filmsReducer from './filmsSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		films: filmsReducer,
		// film: -,
		// actor: -,
	},
});

export type RootState = ReturnType<typeof store.getState>;
