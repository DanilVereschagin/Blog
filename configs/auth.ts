import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/data/users';

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

				const currentUsers = users.find(
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
