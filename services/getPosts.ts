import { Post as PostType } from '@/types/types';

export const getAllPosts = async () => {
	const res = await fetch('http://localhost:3300/posts');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};

export const getPostsBySearch = async (searchTerm: string) => {
	const res = await fetch(`http://localhost:3300/posts?q=${searchTerm}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};

export async function getPostById(id: string): Promise<PostType> {
	const res = await fetch(`http://localhost:3300/posts/${id}`, {
		next: {
			revalidate: 60,
		},
	});
	const posts = await res.json();
	return posts;
}
