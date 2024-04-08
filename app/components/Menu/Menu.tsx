// 'use client';
// import Link from 'next/link';
// // import { useRouter } from 'next/dist/client/router';
// import { useRouter } from 'next/navigation';
// import { KeyboardEvent, useContext, useState } from 'react';
// import { motion, useReducedMotion } from 'framer-motion';
// import cn from 'classnames';
// import { AppContext } from '../../contex/app.context';
// import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
// import { firstLevelMenu } from '../../helpers/helpers';
// import styles from './Menu.module.css';

// export const Menu = (): JSX.Element => {
// 	const router = useRouter();
// 	const shouldReduceMotion = useReducedMotion();

// 	const { menu, setMenu, firstCategory } = useContext(AppContext);
// 	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();

// 	const variantsSecondLevel = {
// 		visible: {
// 			marginBottom: 20,
// 			transition: shouldReduceMotion
// 				? {}
// 				: {
// 						when: 'beforeChildren',
// 						staggerChildren: 0.1,
// 				  },
// 		},
// 		hidden: {
// 			marginBottom: 0,
// 		},
// 	};

// 	const variantsThirdLevel = {
// 		visible: {
// 			opacity: 1,
// 			height: 29,
// 		},
// 		hidden: {
// 			opacity: shouldReduceMotion ? 1 : 0,
// 			height: 0,
// 		},
// 	};

// 	const openSecondLevel = (secondCategory: string) => {
// 		setMenu?.(
// 			menu.map((m) => {
// 				if (m._id.secondCategory === secondCategory) {
// 					setAnnounce(m.isOpened ? 'closed' : 'opened');
// 					m.isOpened = !m.isOpened;
// 				}

// 				return m;
// 			})
// 		);
// 	};

// 	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
// 		if (key.code === 'Space' || key.code === ' Enter') {
// 			key.preventDefault();
// 			openSecondLevel(secondCategory);
// 		}
// 	};

// 	const buildFirstLevel = () => (
// 		<ul className={styles.firstLevelList}>
// 			{firstLevelMenu.map((m) => (
// 				<li aria-expanded={m.id === firstCategory} key={m.route}>
// 					<Link href={`/${m.route}`}>
// 						<a>
// 							<div
// 								className={cn(styles.firstLevel, {
// 									[styles.firstLevelActive]: m.id === firstCategory,
// 								})}
// 							>
// 								{m.icon}
// 								<span>{m.name}</span>
// 							</div>
// 						</a>
// 					</Link>

// 					{m.id === firstCategory && buildSecondLevel(m)}
// 				</li>
// 			))}
// 		</ul>
// 	);

// 	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
// 		<ul className={cn(styles.secondBlock)}>
// 			{menu.map((m) => {
// 				if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
// 					m.isOpened = true;
// 				}

// 				return (
// 					<li key={m._id.secondCategory}>
// 						<button
// 							aria-expanded={m.isOpened}
// 							className={cn(styles.secondLevel)}
// 							onClick={() => openSecondLevel(m._id.secondCategory)}
// 							onKeyDown={(key: KeyboardEvent) =>
// 								openSecondLevelKey(key, m._id.secondCategory)
// 							}
// 						>
// 							{m._id.secondCategory}
// 						</button>

// 						<motion.ul
// 							layout
// 							animate={m.isOpened ? 'visible' : 'hidden'}
// 							className={styles.secondLevelBlock}
// 							initial={m.isOpened ? 'visible' : 'hidden'}
// 							variants={variantsSecondLevel}
// 						>
// 							{buildFThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
// 						</motion.ul>
// 					</li>
// 				);
// 			})}
// 		</ul>
// 	);

// 	const buildFThirdLevel = (
// 		pages: PageItem[],
// 		route: string,
// 		isOpened: boolean
// 	) =>
// 		pages.map((p) => (
// 			<motion.li key={p.title} variants={variantsThirdLevel}>
// 				<Link href={`/${route}/${p.alias}`}>
// 					<a
// 						aria-current={
// 							`/${route}/${p.alias}` === router.asPath ? 'page' : false
// 						}
// 						className={cn(styles.thirdLevel, {
// 							[styles.thirdLevelActive]:
// 								`/${route}/${p.alias}` === router.asPath,
// 						})}
// 						tabIndex={isOpened ? 0 : -1}
// 					>
// 						{p.category}
// 					</a>
// 				</Link>
// 			</motion.li>
// 		));

// 	return (
// 		<nav className={cn(styles.menu)} role="navigation">
// 			{announce && (
// 				<span className="visuallyHidden" role="log">
// 					{announce === 'opened' ? 'развёрнуто' : 'свёрнуто'}
// 				</span>
// 			)}
// 			{buildFirstLevel()}
// 		</nav>
// 	);
// };
