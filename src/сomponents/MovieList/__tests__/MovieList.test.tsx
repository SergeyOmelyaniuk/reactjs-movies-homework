import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MovieList from '..';
import { movies } from '../../../mocks/movies';

describe('MovieList', () => {
	test('should render with search results', () => {
		const { container } = render(
			<BrowserRouter>
				<MovieList movies={movies.popular} />
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});

	test('should render when search results is empty', () => {
		const { container } = render(
			<BrowserRouter>
				<MovieList movies={[]} />
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
