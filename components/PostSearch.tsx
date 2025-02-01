'use client';

import { useState, FormEventHandler, FormEvent } from 'react';
import { usePosts } from '@/store';
import { useShallow } from 'zustand/shallow';

const PostSearch = () => {
	const [search, setSearch] = useState('');
	const getPostsBySearch = usePosts(
		useShallow((state) => state.getPostsBySearch)
	);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (
		e: FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		await getPostsBySearch(search);
	};

	return (
		<form className='search__form' onSubmit={handleSubmit}>
			<input
				className='search__input'
				type='search'
				placeholder='Search...'
				value={search}
				onChange={onChange}
			/>
			<button className='search__button' type='submit'>
				Search
			</button>
		</form>
	);
};

export { PostSearch };
