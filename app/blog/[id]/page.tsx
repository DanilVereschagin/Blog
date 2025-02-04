import { Metadata } from 'next';
import { Props, Post as PostType } from '@/types/types';
import { getPost, getAllPosts } from '@/services/getPosts';

export async function generateStaticParams() {
	const posts: PostType[] = await getAllPosts();

	return posts.map((post) => ({
		slug: post.id.toString(),
	}));
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
