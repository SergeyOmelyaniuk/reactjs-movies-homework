import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '..';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { useAppDispatch } from '../../../store/hooks';
import { languages, translate } from '../../../constants';

const mockDispatch = jest.fn();

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: jest.fn(),
	}),
}));

jest.mock('../../../store/hooks', () => {
	const original = jest.requireActual('../../../store/hooks');
	return {
		...original,
		useAppDispatch: jest.fn(),
	};
});

describe('Header', () => {
	beforeEach(() => jest.clearAllMocks());

	test('should render', () => {
		const { container } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	test('should dispatch action for set search value', () => {
		(useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

		const { getByPlaceholderText, getByRole } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		const inputElement = getByPlaceholderText(translate.en.placeholder);
		fireEvent.change(inputElement, { target: { value: 'Hello' } });
		const buttonElement = getByRole('button');
		fireEvent.click(buttonElement);

		expect(mockDispatch).toHaveBeenCalledTimes(1);
	});

	test('should dispatch action for set current language', () => {
		(useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

		const { getByText, queryAllByRole, queryByRole } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		const items = queryAllByRole('menuitem');
		fireEvent.click(items[1]);

		expect(queryByRole('menubar')).not.toBeInTheDocument();
		expect(mockDispatch).toHaveBeenCalledTimes(1);
	});
});
