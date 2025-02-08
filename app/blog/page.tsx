import { PostList } from '@/components/Posts/PostList';
import { PostSearch } from '@/components/Posts/PostSearch';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
};

export const revalidate = 10;

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
