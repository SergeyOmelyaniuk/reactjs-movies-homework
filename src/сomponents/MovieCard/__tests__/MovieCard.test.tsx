import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MovieCard from '..';
import { movies } from '../../../mocks/movies';

describe('MovieCard', () => {
	test('should render', () => {
		const { container } = render(
			<BrowserRouter>
				<MovieCard movie={movies.popular[0]} />
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
