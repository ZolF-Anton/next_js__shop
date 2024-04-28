import Link from 'next/link';
// import { KeyboardEvent, useContext, useState } from 'react';
// import { motion, useReducedMotion } from 'framer-motion';
import cn from 'classnames';
// import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
// import { firstLevelMenu } from '../../helpers/helpers';
import styles from './Menu.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
//import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interfaces';
import { getMenu } from '@/api/menu';
// import { firstLevelMenu } from '@/helpers/helpers';
import React from 'react';
// import Menu2Lvl from './Menu2Lvl';
import BuildFirstLevel from './Menu1Lvl';

export const Menu = async (): Promise<JSX.Element> => {
    const firstCategory = TopLevelCategory.Courses;
    const secondCategory = TopLevelCategory.Services;
    const thirdCategory = TopLevelCategory.Books;
    const forthCategory = TopLevelCategory.Products;

    const menu0 = await getMenu(firstCategory);
    const menu1 = await getMenu(secondCategory);
    const menu2 = await getMenu(thirdCategory);
    const menu3 = await getMenu(forthCategory);

    // const buildFirstLevel = (menu: MenuItem[], firstCategory: TopLevelCategory) => (
    //     <ul className={styles.firstLevelList}>
    //         {firstLevelMenu.map((m) => (
    //             // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    //             <li aria-expanded={m.id === firstCategory} key={m.route}>
    //                 <Link href={`/${m.route}`}>
    //                     <div
    //                         className={cn(styles.firstLevel, {
    //                             [styles.firstLevelActive]: m.id === firstCategory,
    //                         })}
    //                     >
    //                         {m.icon}
    //                         <span>{m.name}</span>
    //                     </div>
    //                 </Link>
    //                 {m.id === firstCategory && <Menu2Lvl menu={menu} menuItem={m} />}
    //             </li>
    //         ))}
    //     </ul>
    // );

    return (
        <nav className={cn(styles.menu)} role='navigation'>
            {/* {announce && (
                <span className='visuallyHidden' role='log'>
                    {announce === 'opened' ? 'развёрнуто' : 'свёрнуто'}
                </span>
            )} */}
            {
                <BuildFirstLevel
                    menu={{ courses: menu0, services: menu1, books: menu2, products: menu3 }}
                    firstCategory={firstCategory}
                />
            }
        </nav>
    );
};
