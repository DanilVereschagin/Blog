'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavProps, NavLink } from '@/types/types';

const Navigation = ({ navLinks }: NavProps) => {
	const pathname = usePathname();

	return (
		<>
			{navLinks.map((link: NavLink) => (
				<Link
					href={link.href}
					key={link.label}
					className={pathname === link.href ? 'active link' : 'link'}
				>
					{link.label}
				</Link>
			))}
		</>
	);
};

export { Navigation };
