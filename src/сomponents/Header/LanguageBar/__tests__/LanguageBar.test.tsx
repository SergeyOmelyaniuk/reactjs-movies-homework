import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageBar from '..';
import { languages } from '../../../../mocks/constants';

describe('LanguageBar', () => {
	test('should render', () => {
		const { container } = render(<LanguageBar languages={languages} />);

		expect(container).toMatchSnapshot();
	});

	test('should render popup on click event', () => {
		const { getByText, queryByRole } = render(
			<LanguageBar languages={languages} />
		);

		expect(queryByRole('menubar')).not.toBeInTheDocument();

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		expect(queryByRole('menubar')).toBeInTheDocument();
	});

	test('should not close popup on click on the same value', () => {
		const { getByText, queryAllByRole, queryByRole } = render(
			<LanguageBar languages={languages} />
		);

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		const items = queryAllByRole('menuitem');
		fireEvent.click(items[0]);

		expect(queryByRole('menubar')).toBeInTheDocument();
	});

	test('should close popup on click on new value', () => {
		const { getByText, queryAllByRole, queryByRole } = render(
			<LanguageBar languages={languages} />
		);

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		const items = queryAllByRole('menuitem');
		fireEvent.click(items[1]);

		expect(queryByRole('menubar')).not.toBeInTheDocument();
		expect(getByText(languages[1].title)).toBeInTheDocument();
	});
});
