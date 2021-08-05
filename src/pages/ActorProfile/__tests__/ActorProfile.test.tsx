import React from 'react';
import { render } from '@testing-library/react';
import ActorProfile from '..';

describe('ActorProfile', () => {
	test('should render', () => {
		const { container } = render(<ActorProfile />);

		expect(container).toMatchSnapshot();
	});
});
