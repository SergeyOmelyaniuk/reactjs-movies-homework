import React from 'react';
import { render } from '@testing-library/react';
import MovieList from '..';
import { movies } from '../../../mocks/movies';

describe('MovieList', () => {
	test('should render with search results', () => {
		const { container } = render(<MovieList movies={movies.popular} />);

		expect(container).toMatchSnapshot();
	});

	test('should render when search results is empty', () => {
		const { container } = render(<MovieList movies={[]} />);

		expect(container).toMatchSnapshot();
	});
});
