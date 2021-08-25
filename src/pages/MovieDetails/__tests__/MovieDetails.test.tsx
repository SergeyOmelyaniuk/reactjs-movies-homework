import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { movies } from '../../../mocks/movies';
import { movieDescription } from '../../../mocks/movie';
import { languages } from '../../../constants';
import MovieDetails from '..';
import {
	getMovieDetails,
	getMovieImages,
	getMoviesRecommendations,
	getListGenres,
	getLanguageSelected,
	getTopCast,
} from '../../../selectors';

jest.mock('../../../сomponents/WrapMovies', () => () => 'WrapMovies');
jest.mock('../../../сomponents/TopBilledCast', () => () => 'TopBilledCast');

jest.mock('react-router-dom', () => ({
	useParams: () => ({
		movieId: '1',
	}),
}));

jest.mock('../../../selectors', () => ({
	getLanguageSelected: jest.fn(),
	getMovieDetails: jest.fn(),
	getMovieImages: jest.fn(),
	getMoviesRecommendations: jest.fn(),
	getListGenres: jest.fn(),
	getTopCast: jest.fn(),
}));

describe('MovieDetails', () => {
	test('should render loader', () => {
		const { container } = render(
			<Provider store={store}>
				<MovieDetails />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	test('should render content', () => {
		(getMoviesRecommendations as jest.Mock).mockReturnValue(
			movies.popular.slice(0, 1)
		);
		(getMovieDetails as jest.Mock).mockReturnValue(movieDescription);
		(getMovieImages as jest.Mock).mockReturnValue([{ file_path: 'path' }]);
		(getTopCast as jest.Mock).mockReturnValue(movies.popular[0].actors);
		(getListGenres as jest.Mock).mockReturnValue([{ id: 1, name: 'genre 1' }]);
		(getLanguageSelected as jest.Mock).mockReturnValue(languages[0]);
		const { container } = render(
			<Provider store={store}>
				<MovieDetails />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
