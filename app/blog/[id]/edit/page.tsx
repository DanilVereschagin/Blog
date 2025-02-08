import { Props } from '@/types/types';
import { getPostById } from '@/services/getPosts';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

async function updatePost(data: FormData) {
	'use server';

	const { id, title, body } = Object.fromEntries(data);

	const response = await fetch(`http://localhost:3300/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title, body, userId: 1 }),
	});

	if (!response.ok) {
		throw new Error('Failed to update post');
	}

	const post = await response.json();

	revalidatePath(`/blog/${id}`);
	redirect(`/blog/${post.id}`);
}

export default async function EditPost({ params }: { params: Props }) {
	const { id } = await params;
	const post = await getPostById(id);

	return (
		<div>
			<h1>Edit Post</h1>

			<form className='form__create_post' action={updatePost}>
				<input type='hidden' name='id' defaultValue={id} />
				<input type='text' name='title' defaultValue={post.title} required />
				<textarea name='body' defaultValue={post.body} required />
				<div>
					<button type='submit'>Update</button>
				</div>
			</form>
		</div>
	);
}
