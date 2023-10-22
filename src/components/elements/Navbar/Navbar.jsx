import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import Second from '../second-page/Second';
import Third from '../third-page/Third';
import Fourth from '../fourth-page/Fourth';
import styles from './Navbar.module.css';
const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link
				activeClass="active"
				to="second"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				About me
			</Link>
			<Link
				activeClass="active"
				to="third"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Skills
			</Link>
			<Link
				activeClass="active"
				to="fourth"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Contact me
			</Link>
		</div>
	);
};

export default Navbar;
