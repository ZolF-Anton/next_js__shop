'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '../../shared/images/logo.svg';
import { Sidebar } from '../Sidebar/Sidebar';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Header = ({ className, ...props }: HeaderProps): React.JSX.Element => {
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: '100%',
        },
    };

    return (
        <header className={cn(styles.header, className)} {...props}>
            <Logo />
            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />

            <motion.div
                animate={isOpened ? 'opened' : 'closed'}
                className={styles.mobileMenu}
                initial={'closed'}
                variants={variants}
            >
                {/* <Sidebar /> */}
                <ButtonIcon
                    appearance='white'
                    className={styles.menuClose}
                    icon='close'
                    onClick={() => setIsOpened(false)}
                />
            </motion.div>
        </header>
    );
};
