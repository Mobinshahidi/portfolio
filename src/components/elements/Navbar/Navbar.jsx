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
				to={Second}
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				About me
			</Link>
			<Link
				activeClass="active"
				to={Third}
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Skills
			</Link>
			<Link
				activeClass="active"
				to={Fourth}
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
