import { create } from 'zustand';
import { UsePosts } from '@/types/types';
import { getAllPosts, getPostsBySearch } from '@/services/getPosts';

export const usePosts = create<UsePosts>()((set) => ({
	posts: [],
	loading: false,
	getAllPosts: async () => {
		set({ loading: true });
		const posts = await getAllPosts();
		set({ loading: false, posts });
	},
	getPostsBySearch: async (searchTerm) => {
		set({ loading: true });
		const posts = await getPostsBySearch(searchTerm);
		set({ posts, loading: false });
	},
}));
