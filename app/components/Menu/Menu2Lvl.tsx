'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interfaces';
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

    const openSecondLevel = (secondCategory: string) => {
        console.log(secondCategory);
        console.log(menu);
        setMenu2(
            menu2.map((m) => {
                if (m._id.secondCategory === secondCategory) {
                    //setAnnounce(m.isOpened ? 'closed' : 'opened');
                    m.isOpened = !m.isOpened;
                }
                return m;
            })
        );
        console.log('BuildSecondLevel   menu', menu);
        console.log('BuildSecondLevel   menu2!!', menu2);
    };
    const buildFThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return pages.map((p) => (
            <li key={p.title}>
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
            </li>
        ));
    };

    return (
        <div className={styles.secondBlock}>
            {menu.map((m) => {
                if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
                    m.isOpened = true;
                }
                return (
                    <div key={m._id.secondCategory}>
                        <div
                            className={styles.secondLevel}
                            onClick={() => openSecondLevel(m._id.secondCategory)}
                        >
                            {m._id.secondCategory}
                        </div>
                        <div
                            className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened,
                            })}
                        >
                            <ul>{buildFThirdLevel(m.pages, menuItem.route, true)}</ul>
                        </div>
                        {/* <ul>{buildFThirdLevel(m.pages, menuItem.route, true)}</ul> */}
                    </div>
                );
            })}
        </div>
    );
};
export default BuildSecondLevel;
