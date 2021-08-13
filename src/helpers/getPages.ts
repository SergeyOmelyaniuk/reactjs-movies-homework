const countItemsPerPage = 5;
const stepForItems = 2;

function getPages(pagesCount: number, currentPage: number) {
	const pages = [];
	if (pagesCount > countItemsPerPage) {
		if (currentPage > 2) {
			for (
				let i = currentPage - stepForItems;
				i <= currentPage + stepForItems;
				i++
			) {
				pages.push(i);
				if (i === pagesCount) break;
			}
		} else {
			for (let i = 1; i <= countItemsPerPage; i++) {
				pages.push(i);
				if (i === pagesCount) break;
			}
		}
	} else {
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
	}
	return pages;
}

export default getPages;
