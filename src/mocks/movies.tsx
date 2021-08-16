import { Movies } from '../types';

export const movies: Movies = {
	popular: [
		{
			poster_path: 'film_1.jpg',
			genre_ids: ['Genre 1', 'Genre 2'],
			id: 1,
			title: 'Красотка на взводе',
			release_date: '2021-05-26',
			genre: ['Боевик', 'Комедия'],
			img: 'film_1.jpg',
			vote_average: 68,
			popularity: 0.5,
			revenue: 120000,
			duration: '2:14',
			overview:
				'Вышибала Линди плохо умеет управлять собственным гневом и постоянно боится кого-то убить в приступе ярости. В качестве самоконтроля она носит специальный жилет, который бьёт её током и успокаивает, прежде чем она совершит необратимое. Но после смерти возлюбленного Линди вынуждена забыть о контроле и отправиться на поиски убийцы.',
			images: [
				'img_1.jpg',
				'img_2.jpg',
				'img_3.jpg',
				'img_4.jpg',
				'img_5.jpg',
				'img_6.jpg',
				'img_7.jpg',
				'img_8.jpg',
			],
			actors: [
				{
					id: 1,
					name: 'Kate Beckinsale',
					birthday: '1959-04-15',
					placeBirth: 'Brest, Belarus',
					biography: 'Text',
					photo: 'photo_1.jpg',
					photos: ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg', 'photo_4.jpg'],
					character: 'Lindy',
				},
				{
					id: 2,
					name: 'Stanley Tucci',
					birthday: '1959-04-15',
					placeBirth: 'Brest, Belarus',
					biography: 'Text',
					photo: 'photo_2.jpg',
					photos: ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg', 'photo_4.jpg'],
					character: 'Dr. Ivan Munchin',
				},
				{
					id: 3,
					name: 'Bobby Cannavale',
					birthday: '1959-04-15',
					placeBirth: 'Brest, Belarus',
					biography: 'Text',
					photo: 'photo_3.jpg',
					photos: ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg', 'photo_4.jpg'],
					character: 'Detective Vicars',
				},
				{
					id: 4,
					name: 'Jai Courtney',
					birthday: '1959-04-15',
					placeBirth: 'Brest, Belarus',
					biography: 'Text',
					photo: 'photo_4.jpg',
					photos: ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg', 'photo_4.jpg'],
					character: 'Justin',
				},
				{
					id: 5,
					name: 'Laverne Cox',
					birthday: '1959-04-15',
					placeBirth: 'Brest, Belarus',
					biography: 'Text',
					photo: 'photo_5.jpg',
					photos: ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg', 'photo_4.jpg'],
					character: 'Detective Nevin',
				},
				{
					id: 6,
					name: 'David Bradley',
					birthday: '1959-04-15',
					placeBirth: 'Brest, Belarus',
					biography: 'Text',
					photo: 'photo_6.jpg',
					photos: ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg', 'photo_4.jpg'],
					character: 'Gareth Fizel',
				},
			],
		},
		{
			poster_path: 'film_2.jpg',
			genre_ids: ['Genre 1', 'Genre 2'],
			id: 2,
			title: 'Сокровище Счастливчика',
			release_date: '2021-05-26',
			genre: ['Боевик', 'Комедия', 'Драма'],
			img: 'film_2.jpg',
			vote_average: 72,
			popularity: 0.5,
			revenue: 230000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 3,
			poster_path: 'film_3.jpg',
			genre_ids: ['Genre 1'],
			title: 'Сталинград',
			release_date: '2021-05-26',
			genre: ['Боевик', 'Комедия'],
			img: 'film_3.jpg',
			vote_average: 76,
			popularity: 0.5,
			revenue: 240000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 4,
			poster_path: 'film42.jpg',
			genre_ids: ['Genre 4'],
			title: 'Люди в черном: Интернэшнл',
			release_date: '2021-05-26',
			genre: ['Боевик', 'Комедия'],
			img: 'film_4.jpg',
			vote_average: 69,
			popularity: 0.5,
			revenue: 136000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 5,
			poster_path: 'film_5.jpg',
			genre_ids: ['Genre 1'],
			title: 'Значит, война',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_5.jpg',
			vote_average: 96,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 6,
			poster_path: 'film_6.jpg',
			genre_ids: ['Genre 1'],
			title: 'Приключения желтого чемоданчика',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_6.jpg',
			vote_average: 77,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			poster_path: 'film_7.jpg',
			genre_ids: ['Genre 1'],
			id: 7,
			title: 'Поезд в Пусан',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_7.jpg',
			vote_average: 79,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 8,
			poster_path: 'film_8.jpg',
			genre_ids: ['Genre 3'],
			title: 'Никто не выжил',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_8.jpg',
			vote_average: 79,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 9,
			poster_path: 'film_9.jpg',
			genre_ids: ['Genre 1'],
			title: 'Ведьма',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_9.jpg',
			vote_average: 53,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 10,
			poster_path: 'film_10.jpg',
			genre_ids: ['Genre 1'],
			title: 'Звёздные войны: Пробуждение силы',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_10.jpg',
			vote_average: 53,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 11,
			poster_path: 'film_11.jpg',
			genre_ids: ['Genre 1'],
			title: 'Марсианин',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_11.jpg',
			vote_average: 58,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 12,
			poster_path: 'film_12jpg',
			genre_ids: ['Genre 3'],
			title: 'Республика Z',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_12.jpg',
			vote_average: 100,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 13,
			poster_path: 'film_13.jpg',
			genre_ids: ['Genre 1'],
			title: 'Планета 51',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_13.jpg',
			vote_average: 90,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 14,
			poster_path: 'film_14.jpg',
			genre_ids: ['Genre 1'],
			title: 'Красные туфельки и семь гномов',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_14.jpg',
			vote_average: 86,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 15,
			poster_path: 'film_15.jpg',
			genre_ids: ['Genre 1'],
			title: 'Капитошка',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_15.jpg',
			vote_average: 92,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 16,
			poster_path: 'film_16.jpg',
			genre_ids: ['Genre 1'],
			title: 'Война будущего',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_16.jpg',
			vote_average: 58,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 17,
			poster_path: 'film_17.jpg',
			genre_ids: ['Genre 5'],
			title: 'Чернобыль',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_17.jpg',
			vote_average: 86,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 18,
			poster_path: 'film_18.jpg',
			genre_ids: ['Genre 3'],
			title: 'Странный дом',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_18.jpg',
			vote_average: 81,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 19,
			poster_path: 'film_19.jpg',
			genre_ids: ['Genre 1'],
			title: 'Дальний космос',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_19.jpg',
			vote_average: 79,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 20,
			poster_path: 'film_20.jpg',
			genre_ids: ['Genre 1'],
			title: 'Мандалорец',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_20.jpg',
			vote_average: 20,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
	],
	top_rated: [
		{
			id: 21,
			poster_path: 'film_21.jpg',
			genre_ids: ['Genre 1'],
			title: 'Интерстеллар',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_21.jpg',
			vote_average: 56,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 22,
			poster_path: 'film_22.jpg',
			genre_ids: ['Genre 2'],
			title: 'Безумный Макс: Дорога ярости',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_22.jpg',
			vote_average: 89,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 23,
			poster_path: 'film_23.jpg',
			genre_ids: ['Genre 2'],
			title: 'Гонка',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_23.jpg',
			vote_average: 56,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 24,
			poster_path: 'film_24.jpg',
			genre_ids: ['Genre 2'],
			title: 'Джокер',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_24.jpg',
			vote_average: 24,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 25,
			poster_path: 'film_25.jpg',
			genre_ids: ['Genre 2'],
			title: 'Отступники',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_25.jpg',
			vote_average: 79,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 26,
			poster_path: 'film_26.jpg',
			genre_ids: ['Genre 2'],
			title: 'Мстители: Финал',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_26.jpg',
			vote_average: 80,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 27,
			poster_path: 'film_27.jpg',
			genre_ids: ['Genre 2'],
			title: '1917',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_27.jpg',
			vote_average: 76,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 28,
			poster_path: 'film_28.jpg',
			genre_ids: ['Genre 2'],
			title: 'Тьма',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_28.jpg',
			vote_average: 55,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 29,
			poster_path: 'film_29.jpg',
			genre_ids: ['Genre 2'],
			title: 'Остров проклятых',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_29.jpg',
			vote_average: 11,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 30,
			poster_path: 'film_30.jpg',
			genre_ids: ['Genre 3'],
			title: 'Дикие истории',
			release_date: '2021-05-26',
			genre: ['Драма'],
			img: 'film_30.jpg',
			vote_average: 46,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
	],
	upcoming: [
		{
			id: 31,
			poster_path: 'film_31.jpg',
			genre_ids: ['Genre 3'],
			title: 'Бегущий по лезвию 2049',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_31.jpg',
			vote_average: 68,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 32,
			poster_path: 'film_32.jpg',
			genre_ids: ['Genre 3'],
			title: 'Клаустрофобы 2: Лига выживших',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_32.jpg',
			vote_average: 97,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 33,
			poster_path: 'film_33.jpg',
			genre_ids: ['Genre 3'],
			title: 'В петле времени',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_33.jpg',
			vote_average: 89,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 34,
			poster_path: 'film_34.jpg',
			genre_ids: ['Genre 3'],
			title: 'Дальний космос',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_34.jpg',
			vote_average: 89,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
		{
			id: 35,
			poster_path: 'film_35.jpg',
			genre_ids: ['Genre 3'],
			title: 'Как приручить дракона 3',
			release_date: '2021-05-26',
			genre: ['Боевик'],
			img: 'film_35.jpg',
			vote_average: 55,
			popularity: 0.5,
			revenue: 226000,
			duration: '2:14',
			overview: '',
			images: [],
			actors: [],
		},
	],
};
