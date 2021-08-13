import React from 'react';
import { render } from '@testing-library/react';
import Main from '..';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { setSearcValue } from '../../../store/filmsSlice';

describe('Main', () => {
	test('should render with the list of movies', () => {
		const { container } = render(
			<Provider store={store}>
				<Main />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
	test('should render with search results', () => {
		const { container } = render(
			<Provider store={store}>
				<Main />
			</Provider>
		);

		store.dispatch(setSearcValue('some search text'));

		expect(container).toMatchSnapshot();
	});
});
