'use client';
/* eslint-disable jsx-a11y/role-supports-aria-props */
import cn from 'classnames';
import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id='sort'>
                Сортировка
            </div>

            <button
                aria-labelledby='sort rating'
                aria-selected={sort === SortEnum.Rating}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating,
                })}
                id='rating'
                onClick={() => setSort(SortEnum.Rating)}
            >
                <SortIcon className={styles.sortIcon} />
                По рейтингу
            </button>

            <button
                aria-labelledby='sort price'
                aria-selected={sort === SortEnum.Price}
                className={cn({
                    [styles.active]: sort === SortEnum.Price,
                })}
                id='price'
                onClick={() => setSort(SortEnum.Price)}
            >
                <SortIcon className={styles.sortIcon} />
                По цене
            </button>
        </div>
    );
};
