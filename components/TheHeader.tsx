import Link from 'next/link';
import React from 'react';

const TheHeader = () => {
	return (
		<header>
			<Link href='/' className='link'>
				Home
			</Link>
			<Link href='/blog' className='link'>
				Blog
			</Link>
			<Link href='/about' className='link'>
				About
			</Link>
		</header>
	);
};

export default TheHeader;
