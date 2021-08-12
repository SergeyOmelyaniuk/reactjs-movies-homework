import React, { FormEvent, useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
	searchValue: string;
	setSearcValue: (value: string) => void;
}

function Search(props: SearchProps) {
	const [searchInput, setSearchInput] = useState(props.searchValue);

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		props.setSearcValue(searchInput);
	};

	const onChange = (event: FormEvent) => {
		const { value } = event.target as HTMLInputElement;
		setSearchInput(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				id=''
				className={styles.input}
				type='text'
				placeholder='Movies, person, movie theaters'
				value={searchInput}
				onChange={onChange}
			/>
			<button type='submit' className={styles.button}></button>
		</form>
	);
}

export default Search;
