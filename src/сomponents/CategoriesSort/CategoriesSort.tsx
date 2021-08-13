import React, { Fragment, MouseEvent } from 'react';
import { Category } from '../../types';
import styles from './CategoriesSort.module.scss';

interface CategoriesSortProps {
	categories: Category[];
	categoryValue: string;
	changeCategory: (value: string) => void;
}

const CategoriesSort = ({
	categories,
	categoryValue,
	changeCategory,
}: CategoriesSortProps) => {
	const handler = (event: MouseEvent) => {
		changeCategory((event.target as HTMLInputElement).value);
	};

	return (
		<div className={styles.categoriesSort}>
			{categories.map((category) => {
				return (
					<Fragment key={category.id}>
						<input
							onClick={handler}
							id={`radio-${category.id}`}
							type='radio'
							name='sort'
							value={category.value}
							defaultChecked={category.value === categoryValue}
						/>
						<label htmlFor={`radio-${category.id}`}>{category.title}</label>
					</Fragment>
				);
			})}
		</div>
	);
};

export default CategoriesSort;
