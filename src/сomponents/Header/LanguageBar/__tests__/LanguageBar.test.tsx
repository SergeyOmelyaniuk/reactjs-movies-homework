import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageBar from '..';
import { languages } from '../../../../mocks/constants';

describe('LanguageBar', () => {
	test('should render', () => {
		const { container } = render(
			<LanguageBar
				languages={languages}
				currentlanguage={languages[0]}
				setCurrentlanguage={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should render popup on click event', () => {
		const { getByText, queryByRole } = render(
			<LanguageBar
				languages={languages}
				currentlanguage={languages[0]}
				setCurrentlanguage={() => {}}
			/>
		);

		expect(queryByRole('menubar')).not.toBeInTheDocument();

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		expect(queryByRole('menubar')).toBeInTheDocument();
	});

	test('should not close popup on click on the same value', () => {
		const { getByText, queryAllByRole, queryByRole } = render(
			<LanguageBar
				languages={languages}
				currentlanguage={languages[0]}
				setCurrentlanguage={() => {}}
			/>
		);

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		const items = queryAllByRole('menuitem');
		fireEvent.click(items[0]);

		expect(queryByRole('menubar')).toBeInTheDocument();
	});

	test('should close popup on click on new value', () => {
		const changeLanguageMock = jest.fn();
		const { getByText, queryAllByRole, queryByRole } = render(
			<LanguageBar
				languages={languages}
				currentlanguage={languages[0]}
				setCurrentlanguage={changeLanguageMock}
			/>
		);

		const menuElement = getByText(languages[0].title);
		fireEvent.click(menuElement);

		const items = queryAllByRole('menuitem');
		fireEvent.click(items[1]);

		expect(queryByRole('menubar')).not.toBeInTheDocument();
		expect(changeLanguageMock).toHaveBeenCalledTimes(1);
		expect(changeLanguageMock).toHaveBeenCalledWith(languages[1]);
	});
});
