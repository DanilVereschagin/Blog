import { PostList } from '@/components/PostList';
import { PostSearch } from '@/components/PostSearch';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
};

function Blog() {
	return (
		<div>
			<h1>Blog</h1>
			<PostSearch />
			<PostList />
		</div>
	);
}

export default Blog;
