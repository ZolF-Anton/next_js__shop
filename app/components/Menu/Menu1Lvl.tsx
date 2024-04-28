'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interfaces';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Menu2Lvl from './Menu2Lvl';

type Menu1LvlProp = {
    courses: MenuItem[];
    services: MenuItem[];
    books: MenuItem[];
    products: MenuItem[];
};
type Props = { menu: Menu1LvlProp; firstCategory: TopLevelCategory };
type PathnameSliced = 'courses' | 'services' | 'books' | 'products';

const BuildFirstLevel: React.FC<Props> = ({ menu, firstCategory }) => {
    const pathname = usePathname();
    const pathnameSliced = pathname.split('/')[1] as PathnameSliced;

    return (
        <ul className={styles.firstLevelList}>
            {firstLevelMenu.map((m) => (
                // eslint-disable-next-line jsx-a11y/role-supports-aria-props
                <li aria-expanded={m.route === pathnameSliced} key={m.route}>
                    <Link href={`/${m.route}`}>
                        <div
                            className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.route === pathnameSliced,
                            })}
                        >
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </Link>
                    {m.route === pathnameSliced && (
                        <Menu2Lvl menu={menu[`${pathnameSliced}`]} menuItem={m} />
                    )}
                </li>
            ))}
        </ul>
    );
};
export default BuildFirstLevel;
