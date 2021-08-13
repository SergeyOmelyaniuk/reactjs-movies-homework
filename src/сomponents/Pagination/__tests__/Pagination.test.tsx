import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '..';

describe('Pagination', () => {
	test('should render', () => {
		const { container } = render(
			<Pagination totalPages={5} currentPage={1} setCurrentPage={() => {}} />
		);

		expect(container).toMatchSnapshot();
	});

	test('should call change page on click event', () => {
		const changePageMock = jest.fn();
		const { getByText } = render(
			<Pagination
				totalPages={5}
				currentPage={1}
				setCurrentPage={changePageMock}
			/>
		);

		const menuElement = getByText(4);
		fireEvent.click(menuElement);

		expect(changePageMock).toHaveBeenCalledTimes(1);
		expect(changePageMock).toHaveBeenCalledWith(4);
	});
});
