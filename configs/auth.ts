import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import type { UserType } from '@/types/types';

export const authConfig: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		Credentials({
			credentials: {
				email: { label: 'email', type: 'email' },
				password: { label: 'password', type: 'password' },
			},
			authorize: async (credentials) => {
				if (!credentials?.email || !credentials.password) return null;

				const users: Promise<UserType[]> = (
					await fetch('http://localhost:3300/users')
				).json();

				const currentUsers = (await users).find(
					(user) => user.email === credentials.email
				);

				if (currentUsers && currentUsers.password === credentials.password) {
					const { password, ...userWithoutPass } = currentUsers;

					return userWithoutPass as User;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
};
