import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from '..';

describe('ErrorPage', () => {
	test('should render', () => {
		const { container } = render(<ErrorPage />);

		expect(container).toMatchSnapshot();
	});
});
