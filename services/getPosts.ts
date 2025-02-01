export const getAllPosts = async () => {
	const res = await fetch('/api/posts');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};

export const getPostsBySearch = async (searchTerm: string) => {
	const res = await fetch(`/api/posts?q=${searchTerm}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};
