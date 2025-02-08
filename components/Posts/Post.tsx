import { Post as PostType } from '@/types/types';
import Link from 'next/link';

export const Post = ({ id, title }: PostType) => {
	return (
		<Link key={id} className='post link' href={`/blog/${id}`}>
			{title}
		</Link>
	);
};
