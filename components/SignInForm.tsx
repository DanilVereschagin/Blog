'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';

const SignInForm = () => {
	const router = useRouter();
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const res = await signIn('credentials', {
			email,
			password,
			redirect: false,
		});

		if (res?.error) {
			alert(res.error);
		} else {
			router.push('/profile');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form__auth_signin'>
			<input type='email' placeholder='Email' name='email' required />
			<input type='password' placeholder='Password' name='password' required />
			<button type='submit'>Sign In</button>
		</form>
	);
};

export { SignInForm };
