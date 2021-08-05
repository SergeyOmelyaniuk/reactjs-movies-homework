import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ActorCard from './ActorCard';
import { movies } from '../../mocks/movies';

export default {
	title: 'Components/ActorCard',
	component: ActorCard,
	argTypes: {},
} as ComponentMeta<typeof ActorCard>;

const Template: ComponentStory<typeof ActorCard> = (args) => (
	<div
		style={{
			width: '200px',
			height: '350px',
			backgroundColor: '#202020',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<ActorCard {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	actor: movies.popular[0].actors[0],
};
