/* eslint-disable react/display-name */
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { CardProps } from './Card.props';
import styles from './Card.module.css';

export const Card = forwardRef(
    (
        { color = 'white', children, className, ...props }: CardProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        return (
            <div {...props} className={cn(styles.card, className, styles[color])} ref={ref}>
                {children}
            </div>
        );
    }
);
