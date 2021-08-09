import { Language } from './types';

export const languages: Language[] = [
	{ title: 'en2', value: 'en-US' },
	{ title: 'ru2', value: 'ru-RU' },
];

export const translate: any = {
	en: {
		title: 'title',
		categories: [
			{ id: 1, value: 'popular', title: 'Popular2' },
			{ id: 2, value: 'top_rated', title: 'Top rated2' },
			{ id: 3, value: 'upcoming', title: 'Upcoming2' },
		],
	},
	ru: {
		title: 'заголовок',
		categories: [
			{ id: 1, value: 'popular', title: 'Популярные' },
			{ id: 2, value: 'top_rated', title: 'Топ рейтинга' },
			{ id: 3, value: 'upcoming', title: 'Ближайшие' },
		],
	},
};
