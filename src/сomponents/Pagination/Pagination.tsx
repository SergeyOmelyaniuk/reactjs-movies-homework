import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import classnames from 'classnames';

interface PaginationProps {
	pages: number;
}

function Pagination(props: PaginationProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const countPages = new Array(props.pages).fill(null);

	return (
		<ul className={styles.pagination}>
			{countPages.map((page, index) => (
				<li
					onClick={() => setCurrentPage(index + 1)}
					key={index}
					className={classnames(styles.item, {
						[styles.active]: currentPage === index + 1,
					})}
				>
					{index + 1}
				</li>
			))}
		</ul>
	);
}

export default Pagination;
