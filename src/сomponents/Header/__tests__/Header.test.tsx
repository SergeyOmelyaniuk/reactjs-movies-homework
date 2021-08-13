import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('Header', () => {
	test('should render', () => {
		const { container } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
