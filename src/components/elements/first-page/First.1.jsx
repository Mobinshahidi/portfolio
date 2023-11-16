import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { Element } from 'react-scroll';
import { Sling as Hamburger } from 'hamburger-react';
import styles from './First.module.css';
import cv from '../../../assets/Mobin-Shahidi-cv.pdf';

export const First = () => {
	const [,] = useState();
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
		{
			name: 'hamburger',
			icon: (
				<div className={styles.hamburger}>
					<Hamburger />
				</div>
			),
		},
	];
	return (
		<Element name="first" className={styles.container}>
			<div className={styles.container__biography}>
				<div className={styles.icons}>
					{icons.map((icon) => (
						<a href={icon.url} key={icon.name}>
							{icon.icon}
						</a>
					))}
				</div>

				<div className={styles.biography}>
					<p>
						Hello, I am <b>Mobin Shahidi</b>{' '}
					</p>
					<Typewriter
						component="p"
						options={{
							delay: 50,
						}}
						onInit={(typewriter) => {
							typewriter
								.typeString(
									'Restrictions are not defined for me, for this reason I use Linux to learn new things, I love learning new things, and I always learn new things every time. I shape my life with html, css, tailwind and... and make rules with JavaScript and React.',
								)
								.start();
						}}
					/>
				</div>
			</div>
			<div className={styles.container__links}>
				<a className={styles.email} href="mailto:example@example.com">
					mowbinsh@gmail.com
				</a>
				<a href={cv} download="" className={styles.cv}>
					{' '}
					Download CV
				</a>
			</div>
		</Element>
	);
};
