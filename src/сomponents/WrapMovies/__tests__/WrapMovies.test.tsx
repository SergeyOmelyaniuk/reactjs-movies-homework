import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import WrapMovies from '..';
import { movies } from '../../../mocks/movies';

describe('WrapMovies', () => {
	test('should render', () => {
		const { container } = render(
			<BrowserRouter>
				<WrapMovies movies={movies.popular} />
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
