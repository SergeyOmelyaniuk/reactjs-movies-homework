import { Language } from './types';

export const languages: Language[] = [
	{ title: 'en', value: 'en-US' },
	{ title: 'ru', value: 'ru-RU' },
];

export const translate: any = {
	en: {
		title: 'title',
		placeholder: 'Movies, person, movie theaters',
		categories: [
			{ id: 1, value: 'popular', title: 'Popular' },
			{ id: 2, value: 'top_rated', title: 'Top rated' },
			{ id: 3, value: 'upcoming', title: 'Upcoming' },
		],
	},
	ru: {
		title: 'заголовок',
		placeholder: 'Фильмы, люди, кинотеатры',
		categories: [
			{ id: 1, value: 'popular', title: 'Популярные' },
			{ id: 2, value: 'top_rated', title: 'Топ рейтинга' },
			{ id: 3, value: 'upcoming', title: 'Ближайшие' },
		],
	},
};
