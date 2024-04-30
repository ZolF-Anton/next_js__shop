'use client';
import { KeyboardEvent, SetStateAction, useCallback, useState } from 'react';
import cn from 'classnames';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Button, Input } from '..';
import GlassIcon from './glass.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [search, setSearch] = useState<string>('');

    console.log('*+**+****+*');
    // console.log(router);
    console.log(searchParams);
    console.log(pathname);
    console.log('*++******++*');

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const goToSearch = () => {
        //router.push('/search');
        router.push('/search' + '?' + createQueryString('q', search));
    };
    // const goToSearch = () => {
    //     router.push({
    //         pathname: '/search',
    //         query: {
    //             q: search,
    //         },
    //     });
    // };

    const handleKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Enter') {
            goToSearch();
        }
    };

    return (
        <form {...props} className={cn(styles.search, className)} role='search'>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                    setSearch(e.target.value)
                }
                onKeyDown={handleKeyDown}
            />

            <Button
                appearence='primary'
                aria-label='Искать по сайту'
                className={styles.button}
                onClick={goToSearch}
            >
                <GlassIcon />
            </Button>
        </form>
    );
};
