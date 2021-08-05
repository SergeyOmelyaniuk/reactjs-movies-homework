import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '..';
import { movies } from '../../../mocks/movies';

describe('MovieCard', () => {
	test('should render', () => {
		const { container } = render(<MovieCard movie={movies.popular[0]} />);

		expect(container).toMatchSnapshot();
	});
});
