import { NavLink } from '@/types/types';
import { Navigation } from './Navigation';

const navItems: NavLink[] = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/blog',
		label: 'Blog',
	},
	{
		href: '/blog/new',
		label: 'New Post',
	},
	{
		href: '/about',
		label: 'About',
	},
];

const TheHeader = () => {
	return (
		<header>
			<Navigation navLinks={navItems} />
		</header>
	);
};

export default TheHeader;
