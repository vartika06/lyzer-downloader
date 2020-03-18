import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
	return (
		<div className='header'>
			<img src={logo} alt='logo' className='logo' />
		</div>
	);
};

export default Navbar;
