import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from '..';

describe('MovieDetails', () => {
	test('should render', () => {
		const { container } = render(<MovieDetails />);

		expect(container).toMatchSnapshot();
	});
});
