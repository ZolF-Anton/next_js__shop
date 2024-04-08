import type { Metadata } from 'next';
import { Jura, Open_Sans, Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });
const jura = Jura({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Next AuthLayout',
	description: 'AuthLayout',
	authors: {
		url: 'https://anton-zolf.su',
		name: 'Anton-ZolF',
	},
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={jura.className}>
				<nav>
					<ul>
						<li>Авторизироваться</li>
						<li>Зарегистрироваться</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
