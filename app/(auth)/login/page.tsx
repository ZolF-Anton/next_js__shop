import s from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth',
	description: 'login login login login',
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

export default function Auth(): JSX.Element {
	return <div className={s.login}>login login login</div>;
}
