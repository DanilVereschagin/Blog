import { Metadata } from 'next';
import { Props, Post as PostType } from '@/types/types';

async function getPost(id: string): Promise<PostType> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate: 60,
		},
	});
	const posts = await res.json();
	return posts;
}

export async function generateMetadata({
	params,
}: {
	params: Props;
}): Promise<Metadata> {
	const { id } = await params;
	const post = await getPost(id);

	return {
		title: post.title,
	};
}

async function Post({ params }: { params: Props }) {
	const { id } = await params;
	const post = await getPost(id);

	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</>
	);
}

export default Post;
