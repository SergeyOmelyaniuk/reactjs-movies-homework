import React from 'react';
import ActorCard from '../ActorCard';
import styles from './TopBilledCast.module.scss';
import { Actor } from '../../types';

interface TopBilledCastProps {
	actors: Actor[];
}

const TopBilledCast = ({ actors }: TopBilledCastProps) => (
	<div className={styles.topBilledCast}>
		<div className={styles.header}>
			<span className={styles.title}>Top billed cast</span>
			<button className={styles.button}>Show all</button>
		</div>
		<div className={styles.wrap}>
			{actors.map((actor) => (
				<ActorCard key={actor.name} actor={actor} />
			))}
		</div>
	</div>
);

export default TopBilledCast;
