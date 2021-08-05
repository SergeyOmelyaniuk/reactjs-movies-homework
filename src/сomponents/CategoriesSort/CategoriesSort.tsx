import React, { Fragment, MouseEvent } from 'react';
import { Category } from '../../types';
import styles from './CategoriesSort.module.scss';

interface CategoriesSortProps {
	categories: Category[];
	categoryValue: string;
	changeCategory: (value: string) => void;
}

function CategoriesSort(props: CategoriesSortProps) {
	const handler = (event: MouseEvent) => {
		props.changeCategory((event.target as HTMLInputElement).value);
	};

	return (
		<div className={styles.categoriesSort}>
			{props.categories.map((category) => {
				return (
					<Fragment key={category.id}>
						<input
							onClick={handler}
							id={`radio-${category.id}`}
							type='radio'
							name='sort'
							value={category.value}
							defaultChecked={category.value === props.categoryValue}
						/>
						<label htmlFor={`radio-${category.id}`}>{category.title}</label>
					</Fragment>
				);
			})}
		</div>
	);
}

export default CategoriesSort;
