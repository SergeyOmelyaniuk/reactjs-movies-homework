import React from 'react';
import ActorCard from '../ActorCard';
import styles from './TopBilledCast.module.scss';

function TopBilledCast() {
	return (
		<div className={styles.topBilledCast}>
			<div className={styles.header}>
				<span className={styles.title}>Top billed cast</span>
				<button className={styles.button}>Show all</button>
			</div>
			<div className={styles.wrap}>
				<ActorCard />
				<ActorCard />
				<ActorCard />
				<ActorCard />
				<ActorCard />
				<ActorCard />
			</div>
		</div>
	);
}

export default TopBilledCast;
