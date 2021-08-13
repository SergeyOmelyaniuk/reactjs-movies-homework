import { Category, Genre, Language } from '../types';

export const categories: Category[] = [
	{ id: 1, value: 'popular', title: 'Popular' },
	{ id: 2, value: 'top_rated', title: 'Top rated' },
	{ id: 3, value: 'upcoming', title: 'Upcoming' },
];

export const languages: Language[] = [
	{ title: 'en', value: 'en-US' },
	{ title: 'ru', value: 'ru-RU' },
];

export const genres: Genre[] = [
	{ id: 1, name: 'Genre 1' },
	{ id: 2, name: 'Genre 2' },
	{ id: 3, name: 'Genre 3' },
	{ id: 4, name: 'Genre 4' },
	{ id: 5, name: 'Genre 5' },
];
