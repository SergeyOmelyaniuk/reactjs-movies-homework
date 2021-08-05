import React from 'react';
import { render } from '@testing-library/react';
import ActorDescription from '..';
import { movies } from '../../../mocks/movies';

describe('ActorDescription', () => {
	test('should render', () => {
		const { container } = render(
			<ActorDescription actor={movies.popular[0].actors[0]} />
		);

		expect(container).toMatchSnapshot();
	});
});
