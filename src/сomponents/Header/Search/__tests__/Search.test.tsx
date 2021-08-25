import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { translate } from '../../../../constants';
import Search from '..';

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: jest.fn(),
	}),
}));

describe('Search', () => {
	const setSearchValueMock = jest.fn();

	test('should render', () => {
		const { container } = render(
			<Search
				placeholder={translate.en.placeholder}
				searchValue=''
				setSearcValue={setSearchValueMock}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should call change value for search on submit event', () => {
		const { getByPlaceholderText, getByRole } = render(
			<Search
				placeholder={translate.en.placeholder}
				searchValue=''
				setSearcValue={setSearchValueMock}
			/>
		);

		const inputElement = getByPlaceholderText('Movies, person, movie theaters');
		fireEvent.change(inputElement, { target: { value: 'Hello' } });
		const buttonElement = getByRole('button');
		fireEvent.click(buttonElement);

		expect(setSearchValueMock).toHaveBeenCalledTimes(1);
		expect(setSearchValueMock).toHaveBeenCalledWith('Hello');
	});
});
