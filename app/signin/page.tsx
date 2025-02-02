import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';

export default async function SignIn() {
	return (
		<div className='form__auth'>
			<h1>Sign In</h1>
			<GoogleButton />
			<div>or</div>
			<SignInForm />
		</div>
	);
}
