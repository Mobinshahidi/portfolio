import React from 'react';
import SliderPic from './parts/SliderPic.jsx';
import styles from './Second.module.css';
const Second = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.biography}>
					<h1 className={styles.title}>Who am i?</h1>
					<p className={styles.text}>
						I'm a 20-year-old who's been passionate about programming since the
						age of 17. I started with Java, dabbled in Python, and eventually
						found my love for front-end development. I'm fascinated by the world
						of computers and technology and consider myself a lifelong learner.
						I aim for productive and fulfilling days. Outside of tech, I have a
						range of hobbies, from working out and reading to painting and
						playing the piano. I'm always hungry for knowledge, whether it's
						through podcasts, articles, or music. What sets me apart is my love
						for planning. I can't go a day without a well-structured agenda,
						both for tech pursuits and the various aspects of my life.
					</p>
				</div>
			</div>
			<div className={styles.photo}>
				<SliderPic />
			</div>
		</div>
	);
};

export default Second;
