'use client';
import { Post as PostType } from '@/types/types';
import { useEffect } from 'react';
import { usePosts } from '@/store';
import { useShallow } from 'zustand/shallow';
import { Post } from './Post';

const PostList = () => {
	const [posts, loading, getAllPosts] = usePosts(
		useShallow((state) => [state.posts, state.loading, state.getAllPosts])
	);

	useEffect(() => {
		getAllPosts();
	}, [getAllPosts]);

	return loading ? (
		<h3>Loading...</h3>
	) : (
		<div className='container'>
			{posts.map((post: PostType) => (
				<Post
					key={post.id}
					id={post.id}
					title={post.title}
					body={post.body}
					userId={post.userId}
				/>
			))}
		</div>
	);
};

export { PostList };
