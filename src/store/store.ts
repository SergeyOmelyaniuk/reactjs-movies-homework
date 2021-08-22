import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import moviesReducer from './moviesSlice';
import movieReducer from './movieSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		movies: moviesReducer,
		movie: movieReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
