import React from 'react';
import styles from './Fourth.module.css';
import Contact from './parts/Contact';
// import Navbar from '../../Navbar/Navbar.jsx';
import { BsFileArrowUp } from 'react-icons/bs';

const Fourth = () => {
	return (
		<div className={styles.container}>
			<div className={styles.contact}>
				<div className={styles.contact__text}>
					<span className={styles.title}>Contact me</span>
					<span className={styles.text}>
						If you'd like to get in touch, have a question, or just want to chat
						about tech, don't hesitate to reach out. I'm always open to new
						opportunities, collaborations, and conversations. Feel free to drop
						a message or connect with me on any of these platforms. I'm looking
						forward to hearing from you!
					</span>
				</div>
				<Contact />
			</div>
			<BsFileArrowUp className={styles.up} style={{ color: '#3d3b3b' }} />
		</div>
	);
};

export default Fourth;
