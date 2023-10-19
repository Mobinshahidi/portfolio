import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import styles from './Footer.module.css';
const Footer = () => {
	const icons = [
		{
			name: 'telegram',
			icon: <FaTelegramPlane />,
			url: 'https://t.me//mobinshahidi',
		},
		{
			name: 'github',
			icon: <FaGithub />,
			url: 'https://github.com/Mobinshahidi',
		},
		{
			name: 'linkedin',
			icon: <FaLinkedinIn />,
			url: 'https://www.linkedin.com/in/mobinshahidi/',
		},
		{
			name: 'hashnode',
			icon: <FaHashnode />,
			url: 'https://hashnode.com/@mobinshahidi',
		},
	];
	return (
		<div>
			<div className={styles.container}>
				{icons.map((icon) => (
					<a href={icon.url} key={icon.name}>
						{icon.icon}
					</a>
				))}
				
			</div>
		</div>
	);
};

export default Footer;
