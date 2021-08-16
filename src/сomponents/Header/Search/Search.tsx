import React, { FormEvent, useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
	searchValue: string;
	setSearcValue: (value: string) => void;
	placeholder: string;
}

const Search = ({ searchValue, setSearcValue, placeholder }: SearchProps) => {
	const [searchInput, setSearchInput] = useState(searchValue);

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		setSearcValue(searchInput);
	};

	const onChange = (event: FormEvent) => {
		const { value } = event.target as HTMLInputElement;
		setSearchInput(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type='text'
				placeholder={placeholder}
				value={searchInput}
				onChange={onChange}
			/>
			<button type='submit' className={styles.button}></button>
		</form>
	);
};

export default Search;
