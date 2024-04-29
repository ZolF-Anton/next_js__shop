'use client';
import { ButtonProps } from './Button.props';
import { motion, MotionProps } from 'framer-motion';
import s from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import { ButtonHTMLAttributes } from 'react';

type ButtonAccumProps = MotionProps & ButtonProps;

export const Button = ({
    appearence,
    arrow = 'none',
    children,
    className,
    ...props
}: ButtonAccumProps): React.JSX.Element => {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
            }}
            className={cn(s.button, className, s[appearence])}
            {...props}
        >
            {children}
            {arrow !== 'none' && (
                <span className={cn(s.arrow, s[arrow])}>
                    <ArrowIcon />
                </span>
            )}
        </motion.button>
    );
};
