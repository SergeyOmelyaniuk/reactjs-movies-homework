import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '..';

describe('Pagination', () => {
	test('should render', () => {
		const { container } = render(<Pagination pages={5} />);

		expect(container).toMatchSnapshot();
	});

	test('should change page', () => {
		const { container, getByText } = render(<Pagination pages={5} />);

		const menuElement = getByText(4);
		fireEvent.click(menuElement);

		expect(container).toMatchSnapshot();
	});
});
