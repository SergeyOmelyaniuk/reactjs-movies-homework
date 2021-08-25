import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import MovieCard from './MovieCard';
import { movies } from '../../mocks/movies';

export default {
	title: 'Components/MovieCard',
	component: MovieCard,
	argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
	<div
		style={{
			width: '300px',
			height: '500px',
			backgroundColor: '#202020',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<BrowserRouter>
			<MovieCard {...args} />
		</BrowserRouter>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	movie: { ...movies.popular[0], poster_path: '' },
};
