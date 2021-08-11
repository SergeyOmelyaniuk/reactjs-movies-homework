import React from 'react';
import styles from './Pagination.module.scss';
import classnames from 'classnames';
import getCountPages from '../../helpers/getCountPages';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setCurrentPage: (value: number) => void;
}

function Pagination(props: PaginationProps) {
	const pages = getCountPages(props.totalPages, props.currentPage);
	return (
		<ul className={styles.pagination}>
			{pages.map((page) => (
				<li
					key={page}
					className={classnames(styles.item, {
						[styles.active]: props.currentPage === page,
					})}
					onClick={() => props.setCurrentPage(page)}
				>
					{page}
				</li>
			))}
		</ul>
	);
}

export default Pagination;
