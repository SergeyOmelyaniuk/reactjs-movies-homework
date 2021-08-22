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
		titleMovie: 'Title',
		overviewMovie: 'Overview',
		releaseDate: 'Release date',
		revenue: 'Revenue',
		duration: 'Duration',
		topBilledCast: 'Top billed cast',
		buttonShowAll: 'Show all',
		images: 'Images',
		recommendations: 'RECOMMENDATIONS',
		minutes: 'minutes',
	},
	ru: {
		title: 'заголовок',
		placeholder: 'Фильмы, люди, кинотеатры',
		categories: [
			{ id: 1, value: 'popular', title: 'Популярные' },
			{ id: 2, value: 'top_rated', title: 'Топ рейтинга' },
			{ id: 3, value: 'upcoming', title: 'Ближайшие' },
		],
		titleMovie: 'Заголовок',
		overviewMovie: 'Обзор',
		releaseDate: 'Дата релиза',
		revenue: 'Доход',
		duration: 'Продолжительность',
		topBilledCast: 'Актерский состав',
		buttonShowAll: 'Показать все',
		images: 'Изображения',
		recommendations: 'РЕКОМЕНДУЕМЫЕ',
		minutes: 'минут',
	},
};
