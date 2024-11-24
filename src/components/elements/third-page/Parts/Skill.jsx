import React from 'react';
import styles from './Skill.module.css';
const Skill = ({ icon, title }) => {
	return (
		<div className={styles.skill}>
			{icon}
			<span>{title}</span>
		</div>
	);
};

export default Skill;
