import React from 'react';
import { render } from '@testing-library/react';
import ActorCard from '..';
import { movies } from '../../../mocks/movies';

describe('ActorCard', () => {
	test('should render', () => {
		const { container } = render(
			<ActorCard actor={movies.popular[0].actors[0]} />
		);

		expect(container).toMatchSnapshot();
	});

	test('should contain actor name', () => {
		const { getByText } = render(
			<ActorCard actor={movies.popular[0].actors[0]} />
		);
		const actorNameElement = getByText(movies.popular[0].actors[0].name);

		expect(actorNameElement).toBeInTheDocument();
	});
});
