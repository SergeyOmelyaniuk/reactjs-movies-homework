import getPages from '../getPages';

describe('getPages', () => {
	test('should return list of pages for the first current page', () => {
		const result = getPages(10, 1);

		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	test('should return list of pages for the some current page', () => {
		const result = getPages(10, 5);

		expect(result).toEqual([3, 4, 5, 6, 7]);
	});

	test('should return list of pages for the last current page', () => {
		const result = getPages(10, 10);

		expect(result).toEqual([8, 9, 10]);
	});

	test('should return list of pages when current page less than items per page', () => {
		const result = getPages(4, 1);

		expect(result).toEqual([1, 2, 3, 4]);
	});
});
