import { Post as PostType } from '@/types/types';
import Link from 'next/link';

export const Post = ({ id, title }: PostType) => {
	return (
		<div className='post' key={id}>
			<Link className='link' href={`/blog/${id}`}>
				{title}
			</Link>
		</div>
	);
};
