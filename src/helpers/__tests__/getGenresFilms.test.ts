import { MovieAPI } from './../../types';
import { movies } from './../../mocks/movies';
import { genres } from './../../mocks/constants';
import getGenresFilms from '../getGenresFilms';

const [movie] = movies.popular;

const movieFromApi: MovieAPI = {
	...movie,
	genre_ids: [1, 2],
};

describe('getGenresFilms', () => {
	test('should get films with genre names', () => {
		const result = getGenresFilms(genres, [movieFromApi]);

		expect(result).toEqual([movie]);
	});

	test('should get films with genre names when genre id is not found', () => {
		const result = getGenresFilms(genres, [
			{ ...movieFromApi, genre_ids: [100] },
		]);

		expect(result).toEqual([{ ...movie, genre_ids: [''] }]);
	});
});
