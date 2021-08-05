import React from 'react';
import { render } from '@testing-library/react';
import TopBilledCast from '..';
import { movies } from '../../../mocks/movies';

describe('TopBilledCast', () => {
	test('should render', () => {
		const { container } = render(
			<TopBilledCast actors={movies.popular[0].actors} />
		);

		expect(container).toMatchSnapshot();
	});
});
