import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MovieDescription from '..';
import { movies } from '../../../mocks/movies';
import { movieDescription } from '../../../mocks/movie';
import { languages } from '../../../constants';

const images = [{ file_path: 'path1' }, { file_path: 'path2' }];

describe('MovieDescription', () => {
	test('should render', () => {
		const { container } = render(
			<BrowserRouter>
				<MovieDescription
					movieDetails={movieDescription}
					movieImages={images}
					topCast={movies.popular[0].actors}
					currentLanguage={languages[0]}
				/>
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
