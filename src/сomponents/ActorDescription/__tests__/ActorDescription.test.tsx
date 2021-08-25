import React from 'react';
import { render } from '@testing-library/react';
import ActorDescription from '..';
import { movies } from '../../../mocks/movies';
import { languages } from '../../../constants';

const images = [{ file_path: 'path1' }, { file_path: 'path2' }];

describe('ActorDescription', () => {
	test('should render', () => {
		const { container } = render(
			<ActorDescription
				actorProfile={movies.popular[0].actors[0]}
				actorImages={images}
				currentLanguage={languages[0]}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});
