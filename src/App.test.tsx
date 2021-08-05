// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test.skip('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('should render', () => {
		const { container } = render(<App />);

		expect(container).toMatchSnapshot();
	});
});
