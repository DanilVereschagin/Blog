import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';
import { Suspense } from 'react';

export default async function SignIn() {
	return (
		<div className='form__auth'>
			<h1>Sign In</h1>
			<Suspense>
				<GoogleButton />
			</Suspense>
			<div>or</div>
			<SignInForm />
		</div>
	);
}
