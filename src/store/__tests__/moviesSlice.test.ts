import { store } from '../store';
import { changeCategory, setCurrentPage, setSearcValue } from '../moviesSlice';
import { categories } from '../../mocks/constants';

describe('moviesSlice', () => {
	test('should change category', () => {
		store.dispatch(changeCategory(categories[1].value));

		const { categoryValue } = store.getState().movies;

		expect(categoryValue).toEqual(categories[1].value);
	});

	test('should change current page', () => {
		store.dispatch(setCurrentPage(2));

		const { currentPage } = store.getState().movies;

		expect(currentPage).toEqual(2);
	});

	test('should change search value', () => {
		store.dispatch(setSearcValue('search value'));

		const { searchValue } = store.getState().movies;

		expect(searchValue).toEqual('search value');
	});
});
