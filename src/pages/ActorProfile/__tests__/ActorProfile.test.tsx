import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { movies } from '../../../mocks/movies';
import { languages } from '../../../constants';
import ActorProfile from '..';
import {
	getActorProfile,
	getActorImages,
	getActorKnowBy,
	getListGenres,
	getLanguageSelected,
} from '../../../selectors';

jest.mock('../../../сomponents/WrapMovies', () => () => 'WrapMovies');

jest.mock('react-router-dom', () => ({
	useParams: () => ({
		actorId: '1',
	}),
}));

jest.mock('../../../selectors', () => ({
	getLanguageSelected: jest.fn(),
	getActorProfile: jest.fn(),
	getActorImages: jest.fn(),
	getActorKnowBy: jest.fn(),
	getListGenres: jest.fn(),
}));

describe('ActorProfile', () => {
	test('should render loader', () => {
		const { container } = render(
			<Provider store={store}>
				<ActorProfile />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	test('should render content', () => {
		(getActorProfile as jest.Mock).mockReturnValue(movies.popular[0].actors[0]);
		(getActorImages as jest.Mock).mockReturnValue([{ file_path: 'path' }]);
		(getActorKnowBy as jest.Mock).mockReturnValue(movies.popular);
		(getListGenres as jest.Mock).mockReturnValue([{ id: 1, name: 'genre 1' }]);
		(getLanguageSelected as jest.Mock).mockReturnValue(languages[0]);

		const { container } = render(
			<Provider store={store}>
				<ActorProfile />
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
