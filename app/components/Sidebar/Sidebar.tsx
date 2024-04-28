// 'use client';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import { Search } from '../../components';
import Logo from '../../shared/images/logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(styles.sidebar, className)}>
            <Logo className={cn(styles.logo)} />
            <Search />
            <Menu />
        </div>
    );
};
