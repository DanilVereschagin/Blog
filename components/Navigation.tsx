'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavProps, NavLink } from '@/types/types';
import { useSession, signOut } from 'next-auth/react';

const Navigation = ({ navLinks }: NavProps) => {
	const pathname = usePathname();
	const session = useSession();

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
			{session?.data && (
				<Link href='/profile' className='link'>
					Profile
				</Link>
			)}
			{session?.data ? (
				<Link
					href='#'
					onClick={() =>
						signOut({
							callbackUrl: '/',
						})
					}
					className='link'
				>
					Sign out
				</Link>
			) : (
				<Link href='/signin' className='link'>
					Sign in
				</Link>
			)}
		</>
	);
};

export { Navigation };
