import Image from 'next/image';
import Img from '@/assets/party.jpg';

export default function Home() {
	return (
		<div className='container'>
			<h1>Welcome!</h1>
			<Image
				src={Img}
				alt='Cat Party'
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
				}}
				quality={80}
				placeholder='blur'
				priority
			/>
		</div>
	);
}
