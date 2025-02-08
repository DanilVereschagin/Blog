import { redirect } from 'next/navigation';

async function createPost(data: FormData) {
	'use server';

	const { title, body } = Object.fromEntries(data);

	const response = await fetch('http://localhost:3300/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title, body, userId: 1 }),
	});

	if (!response.ok) {
		throw new Error('Failed to create post');
	}

	const post = await response.json();

	redirect(`/blog/${post.id}`);
}

export default function NewPostForm() {
	return (
		<form className='form__create_post' action={createPost}>
			<input type='text' placeholder='Title' name='title' required />
			<textarea placeholder='Content' name='body' required />
			<div>
				<button type='submit'>Create post</button>
			</div>
		</form>
	);
}
