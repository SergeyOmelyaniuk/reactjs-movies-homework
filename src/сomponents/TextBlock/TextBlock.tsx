import React from 'react';
import styles from './TextBlock.module.scss';

interface TextBlockProps {
	title: string;
	value: string | number;
}

const TextBlock = ({ title, value }: TextBlockProps) => (
	<div className={styles.textBlock}>
		<span className={styles.title}>{title}:</span>
		<p className={styles.text}>{value}</p>
	</div>
);

export default TextBlock;
