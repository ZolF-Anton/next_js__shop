import s from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description: 'Generated by npx create next app',
	keywords: ['Next js', 'SSR', 'ZolF'],
};

// export async function generateMetadata(): Promise<Metadata> {
// 	//... fetches
// 	let arr = ['Next js', 'GenerateMetadata', 'SSR', 'ZolF'];
// 	let title = 'Generated Next JS Titlee';
// 	return {
// 		title,
// 		description: 'Generated Meta Data',
// 		keywords: arr,
// 	};
// }

export default function About(): JSX.Element {
	return (
		<>
			<div className={s.about}>О НАС</div>
			<div className={s.aboutTemlpe}>О НАС</div>
			<div className={s.about}>О НАС</div>
		</>
	);
}
