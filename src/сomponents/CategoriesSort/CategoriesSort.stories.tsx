import React from 'react';
import { action } from '@storybook/addon-actions';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoriesSort from './CategoriesSort';
import { categories } from '../../mocks/constants';

export default {
	title: 'Components/CategoriesSort',
	component: CategoriesSort,
	argTypes: {},
} as ComponentMeta<typeof CategoriesSort>;

const Template: ComponentStory<typeof CategoriesSort> = (args) => (
	<div
		style={{
			width: '410px',
			height: '110px',
			backgroundColor: '#202020',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<CategoriesSort {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	categories: categories,
	categoryValue: categories[0].value,
	changeCategory: action('Change category'),
};
