import React from 'react';
import Link from 'next/link';
import { Post } from '@/types/types';

export const metadata = {
	title: 'Blog',
};

async function getPosts(): Promise<Post[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 60,
		},
	});

	const posts = await res.json();

	if (!res.ok) throw new Error('Failed to fetch posts :(');

	return posts;
}

async function Blog() {
	const posts = await getPosts();

	return (
		<div>
			<h1>Blog</h1>
			<div className='container'>
				{posts.map((post: Post) => (
					<li key={post.id}>
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</div>
		</div>
	);
}

export default Blog;
