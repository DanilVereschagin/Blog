import { Post } from '@/types/types';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const query = searchParams.get('q');

	const currentPosts = await fetch(
		'https://jsonplaceholder.typicode.com/posts'
	);

	if (!currentPosts.ok) {
		throw new Error('Failed to fetch data');
	}

	let posts = await currentPosts.json();

	if (query) {
		posts = posts.filter((post: Post) =>
			post.title.toLowerCase().includes(query.toLowerCase())
		);
	}

	return NextResponse.json(posts);
}

export async function POST(req: Request) {
	const body = await req.json();
	return NextResponse.json(body);
}
