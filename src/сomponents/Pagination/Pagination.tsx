import React from 'react';
import styles from './Pagination.module.scss';
import classnames from 'classnames';

interface PaginationProps {
	pages: number;
	currentPage: number;
	//TODO
	setCurrentPage: any;
}

function Pagination(props: PaginationProps) {
	const countPages = new Array(props.pages).fill(null);

	return (
		<ul className={styles.pagination}>
			{countPages.map((page, index) => (
				<li
					onClick={() => props.setCurrentPage(index + 1)}
					key={index}
					className={classnames(styles.item, {
						[styles.active]: props.currentPage === index + 1,
					})}
				>
					{index + 1}
				</li>
			))}
		</ul>
	);
}

export default Pagination;
