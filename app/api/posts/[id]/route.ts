import { NextResponse, NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

type Params = Promise<{ id: string }>;

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
	try {
		const { id } = await params;
		const headerList = headers();
		const type = (await headerList).get('Content-Type');

		const cookieList = cookies();
		const cookie = (await cookieList).get('Cookie_1')?.value;

		// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		// 	method: 'DELETE',
		// });
		// const result = await res.json();
		// return NextResponse.json(result);

		// redirect('/blog');

		return NextResponse.json({ id, type, cookie });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Error deleting user', error: error },
			{ status: 500 }
		);
	}
}
