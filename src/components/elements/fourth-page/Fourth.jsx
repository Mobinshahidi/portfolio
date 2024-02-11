import React, { useRef } from 'react';
import styles from './Fourth.module.css';
import Contact from './parts/Contact';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
const Fourth = () => {
	const scrollRef = useRef(null);
	return (
		<Element name="fourth" className={styles.container}>
			{/* <div ref={scrollRef}> */}
				<motion.div
					initial={{ opacity: 0 }}
					viewport={{ root: scrollRef }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: 2,
						delay: 0.2,
					}}
					className={styles.contact}
				>
					<div className={styles.contact__text}>
						<span className={styles.title}>Contact me</span>
						<span className={styles.text}>
							If you'd like to get in touch, have a question, or just want to
							chat about tech, don't hesitate to reach out. I'm always open to
							new opportunities, collaborations, and conversations. Feel free to
							drop a message or connect with me on any of these platforms. I'm
							looking forward to hearing from you!
						</span>
					</div>
					<Contact />
				</motion.div>
			{/* </div> */}
		</Element>
	);
};

export default Fourth;
