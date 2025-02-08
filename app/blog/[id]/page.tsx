import { Metadata } from 'next';
import { Props, Post as PostType } from '@/types/types';
import { getPostById, getAllPosts } from '@/services/getPosts';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

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
	const post = await getPostById(id);

	return {
		title: post.title,
	};
}

async function removePost(id: string) {
	'use server';

	const res = await fetch(`http://localhost:3300/posts/${id}`, {
		method: 'DELETE',
	});

	if (!res.ok) {
		throw new Error('Failed to delete post');
	}

	revalidatePath('/blog');
	redirect('/blog');
}

async function Post({ params }: { params: Props }) {
	const { id } = await params;
	const post = await getPostById(id);

	return (
		<>
			<h1>{post.title}</h1>
			<p className='post__body'>{post.body}</p>

			<div className='post__buttons'>
				<Link className='post__button_edit' href={`/blog/${id}/edit`}>
					Edit
				</Link>

				<form action={removePost.bind(null, id)}>
					<input
						className='post__button_delete'
						type='submit'
						value='Delete post'
					/>
				</form>
			</div>
		</>
	);
}

export default Post;
