import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TopBilledCast from '..';
import { movies } from '../../../mocks/movies';
import { languages } from '../../../constants';

describe('TopBilledCast', () => {
	test('should render', () => {
		const { container } = render(
			<BrowserRouter>
				<TopBilledCast
					actors={movies.popular[0].actors}
					currentLanguage={languages[0]}
				/>
			</BrowserRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
