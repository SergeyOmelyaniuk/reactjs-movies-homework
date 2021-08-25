import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Main from '..';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { useAppDispatch } from '../../../store/hooks';
import { categories } from '../../../mocks/constants';
import { movies } from '../../../mocks/movies';
import { languages } from '../../../constants';

import {
	getCategoryValue,
	getListGenres,
	getLanguageSelected,
	getCurrentPage,
	getTotalPages,
	getSearchValue,
	getListMovies,
} from '../../../selectors';

const mockDispatch = jest.fn();

jest.mock('../../../store/hooks', () => {
	const original = jest.requireActual('../../../store/hooks');
	return {
		...original,
		useAppDispatch: jest.fn(),
	};
});

jest.mock('../../../selectors', () => ({
	getLanguageSelected: jest.fn(),
	getListGenres: jest.fn(),
	getCategoryValue: jest.fn(),
	getTotalPages: jest.fn(),
	getCurrentPage: jest.fn(),
	getSearchValue: jest.fn(),
	getListMovies: jest.fn(),
}));

describe('Main', () => {
	beforeEach(() => {
		(useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

		(getListMovies as jest.Mock).mockReturnValue(movies.popular.slice(0, 1));
		(getLanguageSelected as jest.Mock).mockReturnValue(languages[0]);
		(getSearchValue as jest.Mock).mockReturnValue('');
		(getCategoryValue as jest.Mock).mockReturnValue(categories[0].value);
		(getCurrentPage as jest.Mock).mockReturnValue(1);
		(getTotalPages as jest.Mock).mockReturnValue(10);
		(getListGenres as jest.Mock).mockReturnValue([{ id: 1, name: 'genre 1' }]);
	});

	afterEach(() => jest.clearAllMocks());

	test('should render with the list of movies', () => {
		const { container } = render(
			<BrowserRouter>
				<Provider store={store}>
					<Main />
				</Provider>
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});

	test('should render with search results', () => {
		(getSearchValue as jest.Mock).mockReturnValue('search value');

		const { container } = render(
			<BrowserRouter>
				<Provider store={store}>
					<Main />
				</Provider>
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});

	test('should dispatch action for change category', () => {
		const { getByLabelText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<Main />
				</Provider>
			</BrowserRouter>
		);

		const secondCategoryElement = getByLabelText(categories[1].title);
		fireEvent.click(secondCategoryElement);

		expect(mockDispatch).toHaveBeenCalledTimes(3);
		expect(mockDispatch.mock.calls[2][0]).toEqual({
			payload: categories[1].value,
			type: 'movies/changeCategory',
		});
	});

	test('should dispatch action for change page', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<Main />
				</Provider>
			</BrowserRouter>
		);

		const menuElement = getByText(4);
		fireEvent.click(menuElement);

		expect(mockDispatch).toHaveBeenCalledTimes(3);
		expect(mockDispatch.mock.calls[2][0]).toEqual({
			payload: 4,
			type: 'movies/setCurrentPage',
		});
	});
});
