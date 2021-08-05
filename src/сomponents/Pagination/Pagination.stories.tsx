import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './Pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
	argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
	<div
		style={{
			width: '400px',
			height: '100px',
			backgroundColor: '#202020',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: 'white',
		}}
	>
		<Pagination {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	pages: 5,
};
