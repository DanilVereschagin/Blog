import { Post as PostType } from '@/types/types';

export const getAllPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};

export const getPostsBySearch = async (searchTerm: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};

export async function getPost(id: string): Promise<PostType> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate: 60,
		},
	});
	const posts = await res.json();
	return posts;
}
