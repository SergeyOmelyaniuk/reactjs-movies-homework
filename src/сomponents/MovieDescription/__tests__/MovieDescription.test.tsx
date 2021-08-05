import React from 'react';
import { render } from '@testing-library/react';
import MovieDescription from '..';
import { movies } from '../../../mocks/movies';

describe('MovieDescription', () => {
	test('should render', () => {
		const { container } = render(
			<MovieDescription movie={movies.popular[0]} />
		);

		expect(container).toMatchSnapshot();
	});
});
