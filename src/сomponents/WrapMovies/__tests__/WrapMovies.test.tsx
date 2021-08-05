import React from 'react';
import { render } from '@testing-library/react';
import WrapMovies from '..';
import { movies } from '../../../mocks/movies';

describe('WrapMovies', () => {
	test('should render', () => {
		const { container } = render(<WrapMovies movies={movies.popular} />);

		expect(container).toMatchSnapshot();
	});
});
