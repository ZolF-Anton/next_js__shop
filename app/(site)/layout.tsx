import type { Metadata } from 'next';
import { Jura, Open_Sans, Inter } from 'next/font/google';
import '../globals.css';
import LayoutHeart from '../components/LayoutHeart/LayoutHeart';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });
const jura = Jura({ subsets: ['cyrillic', 'latin'] });

// export const metadata: Metadata = {
// 	title: 'Next JS project for everyone',
// 	description: 'Generated by npx create next app',
// 	authors: {
// 		url: 'https://anton-zolf.su',
// 		name: 'Anton-ZolF',
// 	},
// };

export async function generateMetadata(): Promise<Metadata> {
	let title = 'Next JS project for everyone';
	return {
		title,
		description: 'Generated by npx create next app',
		authors: {
			url: 'https://anton-zolf.su',
			name: 'Anton-ZolF',
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={jura.className}>
				<LayoutHeart>{children}</LayoutHeart>
			</body>
		</html>
	);
}
