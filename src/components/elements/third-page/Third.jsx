import React from 'react';
import { FaLinux } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import styles from './Third.module.css';
import Skill from './Parts/Skill';
const Third = () => {
	const skills = [
		{
			id: 1,
			icon: <FaHtml5 />,
			title: ' HTML 5',
		},
		{
			id: 2,
			icon: <FaCss3 />,
			title: 'CSS 3',
		},
		{
			id: 3,
			icon: <SiJavascript />,
			title: 'JAVA SCRIPT',
		},
		{
			id: 4,
			icon: <FaReact />,
			title: 'REACT JS',
		},
		{
			id: 5,
			icon: <SiTailwindcss />,
			title: 'TAILWIND CSS',
		},
		{
			id: 6,
			icon: <FaGitAlt />,
			title: 'GIT',
		},
		{
			id: 7,
			icon: <SiJquery />,
			title: 'JQUERY',
		},
		{
			id: 8,
			icon: <FaJava />,
			title: 'JAVA',
		},
		{
			id: 9,
			icon: <FaLinux />,
			title: 'LINUX',
		},
	];
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Skills</h2>
			<div className={styles.skills}>
				<div className={styles.skill}>
					{skills.map((skill) => (
						<Skill key={skill.id} icon={skill.icon} title={skill.title} />
					))}
				</div>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
};

export default Third;
