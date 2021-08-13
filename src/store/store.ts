import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import filmsReducer from './filmsSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		films: filmsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
