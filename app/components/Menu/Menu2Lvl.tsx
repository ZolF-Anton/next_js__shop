'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interfaces';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BuildSecondLevel = ({
    menu,
    menuItem,
}: {
    menu: MenuItem[];
    menuItem: FirstLevelMenuItem;
}): React.ReactNode => {
    const pathname = usePathname();
    const [menu2, setMenu2] = useState(menu);
    const shouldReduceMotion = useReducedMotion();

    const variantsSecondLevel = {
        visible: {
            marginBottom: 20,
            transition: shouldReduceMotion
                ? {}
                : {
                      when: 'beforeChildren',
                      staggerChildren: 0.1,
                  },
        },
        hidden: {
            marginBottom: 0,
        },
    };

    const variantsThirdLevel = {
        visible: {
            opacity: 1,
            height: 29,
        },
        hidden: {
            opacity: shouldReduceMotion ? 1 : 0,
            height: 0,
        },
    };

    const openSecondLevel = (secondCategory: string) => {
        setMenu2(
            menu2.map((m) => {
                if (m._id.secondCategory === secondCategory) {
                    //setAnnounce(m.isOpened ? 'closed' : 'opened');
                    m.isOpened = !m.isOpened;
                }
                return m;
            })
        );
    };
    const buildFThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return pages.map((p) => (
            <motion.li key={p.title} variants={variantsThirdLevel}>
                <Link
                    href={`/${route}/${p.alias}`}
                    aria-current={`/${route}/${p.alias}` === 'courses' ? 'page' : false}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
                    })}
                    tabIndex={isOpened ? 0 : -1}
                >
                    {p.category}
                </Link>
            </motion.li>
        ));
    };

    return (
        <ul className={styles.secondBlock}>
            {menu.map((m) => {
                if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
                    m.isOpened = true;
                }
                return (
                    <li key={m._id.secondCategory}>
                        <button
                            className={styles.secondLevel}
                            onClick={() => openSecondLevel(m._id.secondCategory)}
                        >
                            {m._id.secondCategory}
                        </button>
                        <motion.ul
                            layout
                            animate={m.isOpened ? 'visible' : 'hidden'}
                            //className={styles.secondLevelBlock}
                            initial={m.isOpened ? 'visible' : 'hidden'}
                            variants={variantsSecondLevel}
                            className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened,
                            })}
                        >
                            {buildFThirdLevel(m.pages, menuItem.route, true)}
                        </motion.ul>
                    </li>
                );
            })}
        </ul>
    );
};
export default BuildSecondLevel;
