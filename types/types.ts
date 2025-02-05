export type Props = Promise<{
	id: string;
}>;

export type Post = {
	id: number;
	title: string;
	body: string;
	userId: number;
};

export type Posts = {
	posts: Post[];
};

export type NavLink = {
	href: string;
	label: string;
};

export type NavProps = {
	navLinks: NavLink[];
};

export type PostSearchProps = {
	onSearch: (searchTerm: Post[]) => void;
};

export type UsePosts = {
	posts: Post[];
	loading: boolean;
	getAllPosts: () => Promise<void>;
	getPostsBySearch: (searchTerm: string) => Promise<void>;
};

export type UserType = {
	id: string;
	name: string;
	email: string;
	password: string;
};
