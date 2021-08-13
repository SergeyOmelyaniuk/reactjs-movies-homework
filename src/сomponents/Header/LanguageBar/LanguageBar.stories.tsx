import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LanguageBar from './LanguageBar';
import { languages } from '../../../mocks/constants';

export default {
	title: 'Components/LanguageBar',
	component: LanguageBar,
	argTypes: {},
} as ComponentMeta<typeof LanguageBar>;

const Template: ComponentStory<typeof LanguageBar> = (args) => (
	<div
		style={{
			width: '100px',
			height: '200px',
			backgroundColor: '#202020',
			display: 'flex',
			justifyContent: 'center',
		}}
	>
		<LanguageBar {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	languages: languages,
	currentlanguage: languages[0],
	setCurrentlanguage: action('Change language'),
};
