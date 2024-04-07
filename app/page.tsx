import Image from 'next/image';
import s from './page.module.css';
import type { Metadata } from 'next';
import { Button, Htag, P } from './components';

// export const metadata: Metadata = {
// 	title: 'NEW Next JS Titlee',
// 	description: 'Generated by npx create next app',
// 	keywords: ['Next js', 'SSR', 'ZolF'],
// };

export async function generateMetadata(): Promise<Metadata> {
	//... fetches
	let arr = ['Next js', 'GenerateMetadata', 'SSR', 'ZolF'];
	let title = 'Generated Next JS Titlee';
	return {
		title,
		description: 'Generated Meta Data',
		keywords: arr,
	};
}

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Header H1</Htag>
			<Button appearence="primary">BUTTON</Button>
			<Button appearence="ghost" arrow="right">
				BUTTON
			</Button>
			<P size="large">Большой</P>
			<P size="medium">Средний</P>
			<P size="small">Маленький</P>
		</div>
	);
}
