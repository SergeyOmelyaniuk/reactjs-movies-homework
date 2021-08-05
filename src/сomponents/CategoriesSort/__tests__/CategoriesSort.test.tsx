import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CategoriesSort from '..';
import { categories } from '../../../mocks/constants';

describe('CategoriesSort', () => {
	test('should render', () => {
		const { container } = render(
			<CategoriesSort
				categories={categories}
				categoryValue={categories[0].value}
				changeCategory={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should call change category on click event', () => {
		const changeCategoryMock = jest.fn();
		const { getByLabelText } = render(
			<CategoriesSort
				categories={categories}
				categoryValue={categories[0].value}
				changeCategory={changeCategoryMock}
			/>
		);

		const secondCategoryElement = getByLabelText(categories[1].title);
		fireEvent.click(secondCategoryElement);

		expect(changeCategoryMock).toHaveBeenCalledTimes(1);
		expect(changeCategoryMock).toHaveBeenCalledWith(categories[1].value);
	});
});
