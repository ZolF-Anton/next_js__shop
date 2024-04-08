import s from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'News',
	description: 'news news news news',
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

export default function News(): JSX.Element {
	return <div className={s.news}>НОВОсТИ</div>;
}
