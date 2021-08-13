import React from 'react';
import styles from './Pagination.module.scss';
import classnames from 'classnames';
import getCountPages from '../../helpers/getCountPages';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setCurrentPage: (value: number) => void;
}

const Pagination = ({
	totalPages,
	currentPage,
	setCurrentPage,
}: PaginationProps) => {
	const pages = getCountPages(totalPages, currentPage);

	return (
		<ul className={styles.pagination}>
			{pages.map((page) => (
				<li
					key={page}
					className={classnames(styles.item, {
						[styles.active]: currentPage === page,
					})}
					onClick={() => setCurrentPage(page)}
				>
					{page}
				</li>
			))}
		</ul>
	);
};

export default Pagination;
