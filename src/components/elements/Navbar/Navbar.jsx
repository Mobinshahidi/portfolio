import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
	return (
		<div className={styles.navbar}>
			
			<Link
				activeClass="active"
				to="first"
				spy={true}
				smooth={true}
				offset={-70}
				duration={1000}
			>
				Home
			</Link>
			<Link
				activeClass="active"
				to="second"
				spy={true}
				smooth={true}
				offset={-70}
				duration={1000}
			>
				About me
			</Link>
			<Link
				activeClass="active"
				to="third"
				spy={true}
				smooth={true}
				offset={-70}
				duration={1000}
			>
				Skills
			</Link>
			<Link
				activeClass="active"
				to="fourth"
				spy={true}
				smooth={true}
				offset={-70}
				duration={1000}
			>
				Contact me
			</Link>
		</div>
	);
};

export default Navbar;
