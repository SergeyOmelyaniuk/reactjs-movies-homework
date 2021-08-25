import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ActorCard from '..';
import { movies } from '../../../mocks/movies';

describe('ActorCard', () => {
	test('should render', () => {
		const { container } = render(
			<BrowserRouter>
				<ActorCard actor={movies.popular[0].actors[0]} />
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
