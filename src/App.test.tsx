import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

jest.mock('./pages/Main', () => () => 'Main');

describe('App', () => {
	test('should render', () => {
		const { container } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
